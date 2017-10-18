"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var base_component_1 = require("../common/base.component");
var quiz_service_1 = require("../common/services/quiz.service");
var QuizComponent = /** @class */ (function (_super) {
    __extends(QuizComponent, _super);
    function QuizComponent(page, quizService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.quizService = quizService;
        _this.state = QuizState.INITIALIZING;
        return _this;
    }
    Object.defineProperty(QuizComponent.prototype, "isQuestionAnswered", {
        get: function () {
            return this.isQuizFinished || this.state === QuizState.QUESTION_ANSWERED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizComponent.prototype, "isQuizFinished", {
        get: function () {
            return this.state === QuizState.FINISHED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizComponent.prototype, "current", {
        get: function () {
            return this.quizService.currentQuestion;
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.getAnswerClass = function (idx) {
        var clazz = '';
        if (this.isQuestionAnswered) {
            if (this.current.rightAnswerIndex === idx) {
                clazz = 'right-answer';
            }
            else if (this.lastAnswerIndex === idx) {
                clazz = 'wrong-answer';
            }
        }
        return clazz;
    };
    QuizComponent.prototype.sendAnswer = function (idx) {
        this.lastAnswerIndex = idx;
        this.quizService.answer(idx);
        this.state = this.quizService.isLastQuestion() ? QuizState.FINISHED : QuizState.QUESTION_ANSWERED;
    };
    QuizComponent.prototype.nextQuestion = function () {
        if (!this.quizService.isLastQuestion()) {
            this.quizService.nextQuestion();
            this.state = QuizState.QUESTION_IN_PROGRESS;
            this.lastAnswerIndex = null;
        }
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'Quiz',
            moduleId: module.id,
            styleUrls: ['./quiz.component.css'],
            templateUrl: './quiz.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            quiz_service_1.QuizService])
    ], QuizComponent);
    return QuizComponent;
}(base_component_1.BaseComponent));
exports.QuizComponent = QuizComponent;
var QuizState;
(function (QuizState) {
    QuizState[QuizState["INITIALIZING"] = 0] = "INITIALIZING";
    QuizState[QuizState["QUESTION_IN_PROGRESS"] = 1] = "QUESTION_IN_PROGRESS";
    QuizState[QuizState["QUESTION_ANSWERED"] = 2] = "QUESTION_ANSWERED";
    QuizState[QuizState["FINISHED"] = 3] = "FINISHED";
})(QuizState || (QuizState = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpREFBZ0Q7QUFDaEQsMkRBQXlEO0FBRXpELGdFQUEwRTtBQVMxRTtJQUFtQyxpQ0FBYTtJQUs1Qyx1QkFDYyxJQUFVLEVBQ1YsV0FBd0I7UUFGdEMsWUFJSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUphLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUx0QyxXQUFLLEdBQWMsU0FBUyxDQUFDLFlBQVksQ0FBQzs7SUFRMUMsQ0FBQztJQUVELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQzdFLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RHLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBaERRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBUXNCLFdBQUk7WUFDRywwQkFBVztPQVA3QixhQUFhLENBa0R6QjtJQUFELG9CQUFDO0NBQUEsQUFsREQsQ0FBbUMsOEJBQWEsR0FrRC9DO0FBbERZLHNDQUFhO0FBb0QxQixJQUFLLFNBS0o7QUFMRCxXQUFLLFNBQVM7SUFDVix5REFBZ0IsQ0FBQTtJQUNoQix5RUFBd0IsQ0FBQTtJQUN4QixtRUFBcUIsQ0FBQTtJQUNyQixpREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi9jb21tb24vZGF0YS9xdWVzdGlvbic7XHJcbmltcG9ydCB7IFF1aXpTZXJ2aWNlLCBRdWl6QW5zd2VyIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3F1aXouc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnUXVpeicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcXVpei5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcXVpei5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWl6Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGU6IFF1aXpTdGF0ZSA9IFF1aXpTdGF0ZS5JTklUSUFMSVpJTkc7XHJcbiAgICBsYXN0QW5zd2VySW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcGFnZTogUGFnZSxcclxuICAgICAgICBwcm90ZWN0ZWQgcXVpelNlcnZpY2U6IFF1aXpTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNRdWVzdGlvbkFuc3dlcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUXVpekZpbmlzaGVkIHx8IHRoaXMuc3RhdGUgPT09IFF1aXpTdGF0ZS5RVUVTVElPTl9BTlNXRVJFRDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNRdWl6RmluaXNoZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFF1aXpTdGF0ZS5GSU5JU0hFRDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudCgpOiBRdWVzdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVpelNlcnZpY2UuY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuc3dlckNsYXNzKGlkeDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY2xhenogPSAnJztcclxuICAgICAgICBpZih0aGlzLmlzUXVlc3Rpb25BbnN3ZXJlZCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnQucmlnaHRBbnN3ZXJJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBjbGF6eiA9ICdyaWdodC1hbnN3ZXInO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5sYXN0QW5zd2VySW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgY2xhenogPSAnd3JvbmctYW5zd2VyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xheno7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEFuc3dlcihpZHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGFzdEFuc3dlckluZGV4ID0gaWR4O1xyXG4gICAgICAgIHRoaXMucXVpelNlcnZpY2UuYW5zd2VyKGlkeCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSA/IFF1aXpTdGF0ZS5GSU5JU0hFRCA6IFF1aXpTdGF0ZS5RVUVTVElPTl9BTlNXRVJFRDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLm5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUXVpelN0YXRlLlFVRVNUSU9OX0lOX1BST0dSRVNTO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RBbnN3ZXJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZW51bSBRdWl6U3RhdGUge1xyXG4gICAgSU5JVElBTElaSU5HID0gMCxcclxuICAgIFFVRVNUSU9OX0lOX1BST0dSRVNTID0gMSxcclxuICAgIFFVRVNUSU9OX0FOU1dFUkVEID0gMixcclxuICAgIEZJTklTSEVEID0gM1xyXG59Il19