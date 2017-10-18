import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Question {
    private String number;
    private String sectionTitle;
    private String question;
    private List<String> answers;
    private int rightAnswerIndex;
}
