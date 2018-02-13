import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.apache.commons.lang3.StringUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.StringReader;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Parser {

    List<String> ANSWER_INDEXES = Arrays.asList("A", "B", "C", "D");
    List<String> BANNED_QUESTIONS = Arrays.asList( // questions that cannot be included for several reasons (out of context, repeated answers...)
            "600",  // no question text!
            "691",  // no question text!
            "712",  // question cannot be understood without the previous one
            "900",  // repeated answer
            "944"   // repeated answer
    );

    public static void main(String[] args) throws Exception {
        //String outPath = System.getProperty("user.home") + File.separator + "preguntas_" + new Date().getTime() + ".json";
        String outPath = "C:\\Users\\Al\\Desktop\\workspace\\opostests\\mobile-app\\app\\common\\resources\\questions.json";
        System.out.println("File: " + outPath);
        new Parser().parse("raw.pdf", outPath);
    }

    public void parse(String pdfFile, String outPath) throws Exception {
        try(InputStream is = this.getClass().getClassLoader().getResourceAsStream(pdfFile)) {
            String rawPdf = new PDFTextStripper().getText(PDDocument.load(is));
            List<Question> questions = parseQuestions(rawPdf);
            saveQuestionsJson(questions, outPath);
        }
    }

    private void saveQuestionsJson(List<Question> list, String path) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.writeValue(new File(path), list);
    }

    private List<Question> parseQuestions(String rawContents) throws Exception {
        List<Question> res = new ArrayList<>();

        Map<String, Integer> rightAnswers = new HashMap<>();
        final String[] currentSectionTitle = new String[] { null };

        final MatchType[] whatWasLast = new MatchType[] { null };
        Pattern pattern_questionText = Pattern.compile("^([0-9]+)\\.-(.*)$");
        Pattern pattern_answer = Pattern.compile("^[abcd]\\)\\s(.*)$");
        Pattern pattern_blankLine = Pattern.compile("^(\\s)*$");
        Pattern pattern_solution = Pattern.compile("^(Respuestas:)?\\s*([0-9]+)\\.-\\s([ABCD])(\\s)*$");
        Pattern pattern_pageNumber = Pattern.compile("^Página\\s[0-9]+$");
        Pattern pattern_sectionTitle = Pattern.compile("^([0-9]+)-(.*)$");

        try(BufferedReader buffer = new BufferedReader(new StringReader(rawContents))) {
            buffer.lines().forEach(s -> {
                s = s.trim(); // always trim to simplify patterns and avoid white spaces

                if(pattern_blankLine.matcher(s).matches()) {
                    return; // blank line, just ignore
                }
                if(pattern_pageNumber.matcher(s).matches()) {
                    return; // page number from the PDF file, ignore
                }

                Matcher matcher;

                matcher = pattern_solution.matcher(s);
                if(matcher.matches()) {
                    rightAnswers.put(matcher.group(2), answerLetterToIndex(matcher.group(3)));
                    whatWasLast[0] = MatchType.SOLUTION;
                    return;
                }

                matcher = pattern_questionText.matcher(s);
                if(matcher.matches()) { // a new question starts
                    Question q = new Question();
                    q.setSectionTitle(currentSectionTitle[0]);
                    q.setNumber(matcher.group(1));
                    q.setQuestion(matcher.group(2).trim());
                    q.setAnswers(new ArrayList<String>());
                    res.add(q);
                    whatWasLast[0] = MatchType.QUESTION;
                    return;
                }

                matcher = pattern_answer.matcher(s);
                if(matcher.matches()) { // a new answer starts
                    Question q = res.get(res.size()-1); // retrieve the current question...
                    q.getAnswers().add(matcher.group(1)); // ... and add the answer
                    whatWasLast[0] = MatchType.ANSWER;
                    return;
                }

                matcher = pattern_sectionTitle.matcher(s);
                if(matcher.matches()) {
                    currentSectionTitle[0] = matcher.group(2); // set the new current section
                    whatWasLast[0] = MatchType.SECTION;
                    return;
                }

                // otherwise, is a follow-up from the previous line and we continue appending the current question or answer
                Question q = res.get(res.size()-1);
                switch(whatWasLast[0]) {
                    case QUESTION:
                        q.setQuestion(q.getQuestion() + " " + s);
                        break;
                    case ANSWER:
                        String lastAnswer = q.getAnswers().remove(q.getAnswers().size()-1);
                        q.getAnswers().add(lastAnswer + " " + s);
                        break;
                    case SECTION:
                        currentSectionTitle[0] = currentSectionTitle[0] + " " + s;
                        break;
                    default:
                        throw new RuntimeException("Unknown scenario at line with contents: " + s);
                }
            });
        }

		fixWrongAnswers(rightAnswers);
        fillAndCheckQuestionsAndAnswers(res, rightAnswers);

        return res;
    }

	private void fixWrongAnswers(Map<String, Integer> rightAnswers) {
		// 145 - El estado es aconfesional, no católico
		rightAnswers.put("145", ANSWER_INDEXES.indexOf("D"));
		// more fixes here...
	}
	
    private void fillAndCheckQuestionsAndAnswers(List<Question> questions, Map<String, Integer> rightAnswers) {
        for(Iterator<Question> it = questions.iterator();it.hasNext();) {
            Question q = it.next();
            if(BANNED_QUESTIONS.contains(q.getNumber())) {
                it.remove();
                continue;
            }
            q.setRightAnswerIndex(rightAnswers.get(q.getNumber()));
            if(StringUtils.isBlank(q.getSectionTitle())) {
                System.out.println("Question without section title: " + q.getNumber());
            }
            if(q.getAnswers().size() < 3) {
                System.out.println("Question with less than three answers: " + q.getAnswers());
            }
            if(q.getRightAnswerIndex() < 0 || q.getRightAnswerIndex() > q.getAnswers().size()) {
                System.out.println("Question without right answer: " + q.getAnswers());
            }
        }
    }

    private Integer answerLetterToIndex(String letter) {
        return ANSWER_INDEXES.indexOf(letter);
    }

    private enum MatchType {
        QUESTION,
        ANSWER,
        SOLUTION,
        SECTION
    }

}
