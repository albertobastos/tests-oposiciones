"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_service_1 = require("./config.service");
var question_service_1 = require("./question.service");
var QuizService = /** @class */ (function () {
    function QuizService(configService, questionService) {
        this.configService = configService;
        this.questionService = questionService;
    }
    QuizService.prototype.initQuiz = function () {
        this._questions = this.questionService.getRandomQuestions(this.configService.getQuestionsAmount(), this.configService.getSections());
        this._current = 0;
        this._answers = this._questions.map(function (q) { return QuizAnswer.UNANSWERED; });
    };
    Object.defineProperty(QuizService.prototype, "currentQuestion", {
        get: function () {
            return this._questions[this._current];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizService.prototype, "currentQuestionNumber", {
        get: function () {
            return this._current + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizService.prototype, "currentAnswerResult", {
        get: function () {
            return this._answers[this._current];
        },
        enumerable: true,
        configurable: true
    });
    QuizService.prototype.answer = function (answer) {
        if (answer == -1) {
            this._answers[this._current] = QuizAnswer.BLANK;
        }
        else {
            this._answers[this._current] = this._questions[this._current].rightAnswerIndex === answer ? QuizAnswer.RIGHT : QuizAnswer.WRONG;
        }
        return this._answers[this._current];
    };
    QuizService.prototype.nextQuestion = function () {
        if (this.isLastQuestion()) {
            throw new Error("No more questions left!");
        }
        this._current++;
    };
    QuizService.prototype.isLastQuestion = function () {
        return this._current >= this._questions.length - 1;
    };
    Object.defineProperty(QuizService.prototype, "totalQuestions", {
        get: function () {
            return this._questions.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizService.prototype, "totalRightAnswers", {
        get: function () {
            return this._answers.filter(function (ans) { return ans === QuizAnswer.RIGHT; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizService.prototype, "totalWrongAnswers", {
        get: function () {
            return this._answers.filter(function (ans) { return ans === QuizAnswer.WRONG; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizService.prototype, "totalBlankAnswers", {
        get: function () {
            return this._answers.filter(function (ans) { return ans === QuizAnswer.BLANK; }).length;
        },
        enumerable: true,
        configurable: true
    });
    QuizService.prototype.getQuizMark = function () {
        // 1 wrong answer ==> -25% right answer
        var markPerRightAnswer = 10 / this.totalQuestions;
        var markPerWrongAnswer = -0.25 * markPerRightAnswer;
        return this.totalRightAnswers * markPerRightAnswer + this.totalWrongAnswers * markPerWrongAnswer;
    };
    QuizService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [config_service_1.ConfigService,
            question_service_1.QuestionService])
    ], QuizService);
    return QuizService;
}());
exports.QuizService = QuizService;
var QuizAnswer;
(function (QuizAnswer) {
    QuizAnswer[QuizAnswer["WRONG"] = 0] = "WRONG";
    QuizAnswer[QuizAnswer["RIGHT"] = 1] = "RIGHT";
    QuizAnswer[QuizAnswer["BLANK"] = 2] = "BLANK";
    QuizAnswer[QuizAnswer["UNANSWERED"] = 3] = "UNANSWERED";
})(QuizAnswer = exports.QuizAnswer || (exports.QuizAnswer = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVpei5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLG1EQUFpRDtBQUNqRCx1REFBcUQ7QUFHckQ7SUFNSSxxQkFDYyxhQUE0QixFQUM1QixlQUFnQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDMUMsQ0FBQztJQUVMLDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsRUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDbkMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxVQUFVLENBQUMsVUFBVSxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNCQUFJLHdDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQXFCO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQW1CO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsNEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDakIsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDcEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNwSSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsc0JBQUksdUNBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssVUFBVSxDQUFDLEtBQUssRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFpQjthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxVQUFVLENBQUMsS0FBSyxFQUF4QixDQUF3QixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQWlCO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLFVBQVUsQ0FBQyxLQUFLLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksa0JBQWtCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztJQUNyRyxDQUFDO0lBekVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FRb0IsOEJBQWE7WUFDWCxrQ0FBZTtPQVJyQyxXQUFXLENBMkV2QjtJQUFELGtCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksa0NBQVc7QUE2RXhCLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNsQiw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDZDQUFTLENBQUE7SUFDVCx1REFBYyxDQUFBO0FBQ2xCLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi4vZGF0YS9xdWVzdGlvbic7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9xdWVzdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1aXpTZXJ2aWNlIHtcclxuXHJcbiAgICBfcXVlc3Rpb25zOiBRdWVzdGlvbltdO1xyXG4gICAgX2N1cnJlbnQ6IG51bWJlcjtcclxuICAgIF9hbnN3ZXJzOiBRdWl6QW5zd2VyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGluaXRRdWl6KCkge1xyXG4gICAgICAgIHRoaXMuX3F1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25TZXJ2aWNlLmdldFJhbmRvbVF1ZXN0aW9ucyhcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLmdldFF1ZXN0aW9uc0Ftb3VudCgpLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0U2VjdGlvbnMoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYW5zd2VycyA9IHRoaXMuX3F1ZXN0aW9ucy5tYXAocSA9PiBRdWl6QW5zd2VyLlVOQU5TV0VSRUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UXVlc3Rpb24oKTogUXVlc3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbnNbdGhpcy5fY3VycmVudF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRRdWVzdGlvbk51bWJlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50KzE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRBbnN3ZXJSZXN1bHQoKTogUXVpekFuc3dlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fuc3dlcnNbdGhpcy5fY3VycmVudF07XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyKGFuc3dlcjogbnVtYmVyKTogUXVpekFuc3dlciB7XHJcbiAgICAgICAgaWYoYW5zd2VyID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fuc3dlcnNbdGhpcy5fY3VycmVudF0gPSBRdWl6QW5zd2VyLkJMQU5LO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fuc3dlcnNbdGhpcy5fY3VycmVudF0gPSB0aGlzLl9xdWVzdGlvbnNbdGhpcy5fY3VycmVudF0ucmlnaHRBbnN3ZXJJbmRleCA9PT0gYW5zd2VyID8gUXVpekFuc3dlci5SSUdIVCA6IFF1aXpBbnN3ZXIuV1JPTkc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbnN3ZXJzW3RoaXMuX2N1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRRdWVzdGlvbigpIHtcclxuICAgICAgICBpZih0aGlzLmlzTGFzdFF1ZXN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSBxdWVzdGlvbnMgbGVmdCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQrKztcclxuICAgIH1cclxuXHJcbiAgICBpc0xhc3RRdWVzdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudCA+PSB0aGlzLl9xdWVzdGlvbnMubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvdGFsUXVlc3Rpb25zKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvdGFsUmlnaHRBbnN3ZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fuc3dlcnMuZmlsdGVyKGFucyA9PiBhbnMgPT09IFF1aXpBbnN3ZXIuUklHSFQpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG90YWxXcm9uZ0Fuc3dlcnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5zd2Vycy5maWx0ZXIoYW5zID0+IGFucyA9PT0gUXVpekFuc3dlci5XUk9ORykubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3RhbEJsYW5rQW5zd2VycygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbnN3ZXJzLmZpbHRlcihhbnMgPT4gYW5zID09PSBRdWl6QW5zd2VyLkJMQU5LKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UXVpek1hcmsoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyAxIHdyb25nIGFuc3dlciA9PT4gLTI1JSByaWdodCBhbnN3ZXJcclxuICAgICAgICBsZXQgbWFya1BlclJpZ2h0QW5zd2VyID0gMTAgLyB0aGlzLnRvdGFsUXVlc3Rpb25zO1xyXG4gICAgICAgIGxldCBtYXJrUGVyV3JvbmdBbnN3ZXIgPSAtMC4yNSAqIG1hcmtQZXJSaWdodEFuc3dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbFJpZ2h0QW5zd2VycyAqIG1hcmtQZXJSaWdodEFuc3dlciArIHRoaXMudG90YWxXcm9uZ0Fuc3dlcnMgKiBtYXJrUGVyV3JvbmdBbnN3ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZW51bSBRdWl6QW5zd2VyIHtcclxuICAgIFdST05HID0gMCxcclxuICAgIFJJR0hUID0gMSxcclxuICAgIEJMQU5LID0gMixcclxuICAgIFVOQU5TV0VSRUQgPSAzXHJcbn0iXX0=