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
        var result = this.quizService.answer(idx);
        this.state = this.quizService.isLastQuestion() ? QuizState.FINISHED : QuizState.QUESTION_ANSWERED;
    };
    QuizComponent.prototype.nextQuestion = function () {
        if (!this.quizService.isLastQuestion()) {
            this.quizService.nextQuestion();
            this.state = QuizState.QUESTION_IN_PROGRESS;
            this.lastAnswerIndex = null;
        }
    };
    Object.defineProperty(QuizComponent.prototype, "stateText", {
        get: function () {
            switch (this.quizService.currentAnswerResult) {
                case quiz_service_1.QuizAnswer.UNANSWERED:
                    return 'Elija una respuesta...';
                case quiz_service_1.QuizAnswer.RIGHT:
                    return 'Respuesta correcta';
                case quiz_service_1.QuizAnswer.WRONG:
                    return 'Respuesta incorrecta';
                case quiz_service_1.QuizAnswer.BLANK:
                    return '';
            }
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpREFBZ0Q7QUFDaEQsMkRBQXlEO0FBRXpELGdFQUEwRTtBQVMxRTtJQUFtQyxpQ0FBYTtJQUs1Qyx1QkFDYyxJQUFVLEVBQ1YsV0FBd0I7UUFGdEMsWUFJSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUphLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUx0QyxXQUFLLEdBQWMsU0FBUyxDQUFDLFlBQVksQ0FBQzs7SUFRMUMsQ0FBQztJQUVELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQzdFLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RHLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksb0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFLLHlCQUFVLENBQUMsVUFBVTtvQkFDdEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDO2dCQUNwQyxLQUFLLHlCQUFVLENBQUMsS0FBSztvQkFDakIsTUFBTSxDQUFDLG9CQUFvQixDQUFDO2dCQUNoQyxLQUFLLHlCQUFVLENBQUMsS0FBSztvQkFDakIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO2dCQUNsQyxLQUFLLHlCQUFVLENBQUMsS0FBSztvQkFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNsQixDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUE3RFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FRc0IsV0FBSTtZQUNHLDBCQUFXO09BUDdCLGFBQWEsQ0ErRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9ERCxDQUFtQyw4QkFBYSxHQStEL0M7QUEvRFksc0NBQWE7QUFpRTFCLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNWLHlEQUFnQixDQUFBO0lBQ2hCLHlFQUF3QixDQUFBO0lBQ3hCLG1FQUFxQixDQUFBO0lBQ3JCLGlEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9kYXRhL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVpelNlcnZpY2UsIFF1aXpBbnN3ZXIgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvcXVpei5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdRdWl6JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9xdWl6LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9xdWl6LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZTogUXVpelN0YXRlID0gUXVpelN0YXRlLklOSVRJQUxJWklORztcclxuICAgIGxhc3RBbnN3ZXJJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByb3RlY3RlZCBxdWl6U2VydmljZTogUXVpelNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1F1ZXN0aW9uQW5zd2VyZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNRdWl6RmluaXNoZWQgfHwgdGhpcy5zdGF0ZSA9PT0gUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1F1aXpGaW5pc2hlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUXVpelN0YXRlLkZJTklTSEVEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50KCk6IFF1ZXN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWl6U2VydmljZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5zd2VyQ2xhc3MoaWR4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjbGF6eiA9ICcnO1xyXG4gICAgICAgIGlmKHRoaXMuaXNRdWVzdGlvbkFuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudC5yaWdodEFuc3dlckluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXp6ID0gJ3JpZ2h0LWFuc3dlcic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RBbnN3ZXJJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBjbGF6eiA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGF6ejtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQW5zd2VyKGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0QW5zd2VySW5kZXggPSBpZHg7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogUXVpekFuc3dlciA9IHRoaXMucXVpelNlcnZpY2UuYW5zd2VyKGlkeCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSA/IFF1aXpTdGF0ZS5GSU5JU0hFRCA6IFF1aXpTdGF0ZS5RVUVTVElPTl9BTlNXRVJFRDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLm5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUXVpelN0YXRlLlFVRVNUSU9OX0lOX1BST0dSRVNTO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RBbnN3ZXJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGF0ZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2godGhpcy5xdWl6U2VydmljZS5jdXJyZW50QW5zd2VyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgUXVpekFuc3dlci5VTkFOU1dFUkVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbGlqYSB1bmEgcmVzcHVlc3RhLi4uJztcclxuICAgICAgICAgICAgY2FzZSBRdWl6QW5zd2VyLlJJR0hUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdSZXNwdWVzdGEgY29ycmVjdGEnO1xyXG4gICAgICAgICAgICBjYXNlIFF1aXpBbnN3ZXIuV1JPTkc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Jlc3B1ZXN0YSBpbmNvcnJlY3RhJztcclxuICAgICAgICAgICAgY2FzZSBRdWl6QW5zd2VyLkJMQU5LOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmVudW0gUXVpelN0YXRlIHtcclxuICAgIElOSVRJQUxJWklORyA9IDAsXHJcbiAgICBRVUVTVElPTl9JTl9QUk9HUkVTUyA9IDEsXHJcbiAgICBRVUVTVElPTl9BTlNXRVJFRCA9IDIsXHJcbiAgICBGSU5JU0hFRCA9IDNcclxufSJdfQ==