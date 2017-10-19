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
        this._questions = this.questionService.getRandomQuestions(this.configService.getQuestionsAmount(), this.configService.getSectionTitles());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVpei5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLG1EQUFpRDtBQUNqRCx1REFBcUQ7QUFHckQ7SUFNSSxxQkFDYyxhQUE0QixFQUM1QixlQUFnQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDMUMsQ0FBQztJQUVMLDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsRUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFVBQVUsQ0FBQyxVQUFVLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0JBQUksd0NBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBcUI7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBbUI7YUFBdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCw0QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNqQixFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNwRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BJLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGtDQUFZLEdBQVo7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxzQkFBSSx1Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFpQjthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxVQUFVLENBQUMsS0FBSyxFQUF4QixDQUF3QixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQWlCO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLFVBQVUsQ0FBQyxLQUFLLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssVUFBVSxDQUFDLEtBQUssRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQUVELGlDQUFXLEdBQVg7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLGtCQUFrQixHQUFHLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO0lBQ3JHLENBQUM7SUF6RVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQVFvQiw4QkFBYTtZQUNYLGtDQUFlO09BUnJDLFdBQVcsQ0EyRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSxrQ0FBVztBQTZFeEIsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULHVEQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi9kYXRhL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWVzdGlvblNlcnZpY2UgfSBmcm9tICcuL3F1ZXN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVpelNlcnZpY2Uge1xyXG5cclxuICAgIF9xdWVzdGlvbnM6IFF1ZXN0aW9uW107XHJcbiAgICBfY3VycmVudDogbnVtYmVyO1xyXG4gICAgX2Fuc3dlcnM6IFF1aXpBbnN3ZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgcXVlc3Rpb25TZXJ2aWNlOiBRdWVzdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgaW5pdFF1aXooKSB7XHJcbiAgICAgICAgdGhpcy5fcXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvblNlcnZpY2UuZ2V0UmFuZG9tUXVlc3Rpb25zKFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0UXVlc3Rpb25zQW1vdW50KCksXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5nZXRTZWN0aW9uVGl0bGVzKClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2Fuc3dlcnMgPSB0aGlzLl9xdWVzdGlvbnMubWFwKHEgPT4gUXVpekFuc3dlci5VTkFOU1dFUkVEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFF1ZXN0aW9uKCk6IFF1ZXN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25zW3RoaXMuX2N1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UXVlc3Rpb25OdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudCsxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50QW5zd2VyUmVzdWx0KCk6IFF1aXpBbnN3ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbnN3ZXJzW3RoaXMuX2N1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlcihhbnN3ZXI6IG51bWJlcik6IFF1aXpBbnN3ZXIge1xyXG4gICAgICAgIGlmKGFuc3dlciA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbnN3ZXJzW3RoaXMuX2N1cnJlbnRdID0gUXVpekFuc3dlci5CTEFOSztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hbnN3ZXJzW3RoaXMuX2N1cnJlbnRdID0gdGhpcy5fcXVlc3Rpb25zW3RoaXMuX2N1cnJlbnRdLnJpZ2h0QW5zd2VySW5kZXggPT09IGFuc3dlciA/IFF1aXpBbnN3ZXIuUklHSFQgOiBRdWl6QW5zd2VyLldST05HO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5zd2Vyc1t0aGlzLl9jdXJyZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0xhc3RRdWVzdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1vcmUgcXVlc3Rpb25zIGxlZnQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jdXJyZW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMYXN0UXVlc3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQgPj0gdGhpcy5fcXVlc3Rpb25zLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3RhbFF1ZXN0aW9ucygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3RhbFJpZ2h0QW5zd2VycygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbnN3ZXJzLmZpbHRlcihhbnMgPT4gYW5zID09PSBRdWl6QW5zd2VyLlJJR0hUKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvdGFsV3JvbmdBbnN3ZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fuc3dlcnMuZmlsdGVyKGFucyA9PiBhbnMgPT09IFF1aXpBbnN3ZXIuV1JPTkcpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG90YWxCbGFua0Fuc3dlcnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5zd2Vycy5maWx0ZXIoYW5zID0+IGFucyA9PT0gUXVpekFuc3dlci5CTEFOSykubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFF1aXpNYXJrKCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gMSB3cm9uZyBhbnN3ZXIgPT0+IC0yNSUgcmlnaHQgYW5zd2VyXHJcbiAgICAgICAgbGV0IG1hcmtQZXJSaWdodEFuc3dlciA9IDEwIC8gdGhpcy50b3RhbFF1ZXN0aW9ucztcclxuICAgICAgICBsZXQgbWFya1Blcldyb25nQW5zd2VyID0gLTAuMjUgKiBtYXJrUGVyUmlnaHRBbnN3ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxSaWdodEFuc3dlcnMgKiBtYXJrUGVyUmlnaHRBbnN3ZXIgKyB0aGlzLnRvdGFsV3JvbmdBbnN3ZXJzICogbWFya1Blcldyb25nQW5zd2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUXVpekFuc3dlciB7XHJcbiAgICBXUk9ORyA9IDAsXHJcbiAgICBSSUdIVCA9IDEsXHJcbiAgICBCTEFOSyA9IDIsXHJcbiAgICBVTkFOU1dFUkVEID0gM1xyXG59Il19