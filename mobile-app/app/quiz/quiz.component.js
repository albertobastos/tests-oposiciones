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
        if (!this.isQuestionAnswered) {
            this.lastAnswerIndex = idx;
            var result = this.quizService.answer(idx);
            this.state = this.quizService.isLastQuestion() ? QuizState.FINISHED : QuizState.QUESTION_ANSWERED;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpREFBZ0Q7QUFDaEQsMkRBQXlEO0FBRXpELGdFQUEwRTtBQVMxRTtJQUFtQyxpQ0FBYTtJQUs1Qyx1QkFDYyxJQUFVLEVBQ1YsV0FBd0I7UUFGdEMsWUFJSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUphLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUx0QyxXQUFLLEdBQWMsU0FBUyxDQUFDLFlBQVksQ0FBQzs7SUFRMUMsQ0FBQztJQUVELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQzdFLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1lBQzNCLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUN0RyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUsseUJBQVUsQ0FBQyxVQUFVO29CQUN0QixNQUFNLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3BDLEtBQUsseUJBQVUsQ0FBQyxLQUFLO29CQUNqQixNQUFNLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2hDLEtBQUsseUJBQVUsQ0FBQyxLQUFLO29CQUNqQixNQUFNLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2xDLEtBQUsseUJBQVUsQ0FBQyxLQUFLO29CQUNqQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ2xCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQS9EUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVFzQixXQUFJO1lBQ0csMEJBQVc7T0FQN0IsYUFBYSxDQWlFekI7SUFBRCxvQkFBQztDQUFBLEFBakVELENBQW1DLDhCQUFhLEdBaUUvQztBQWpFWSxzQ0FBYTtBQW1FMUIsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1YseURBQWdCLENBQUE7SUFDaEIseUVBQXdCLENBQUE7SUFDeEIsbUVBQXFCLENBQUE7SUFDckIsaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEvcXVlc3Rpb24nO1xyXG5pbXBvcnQgeyBRdWl6U2VydmljZSwgUXVpekFuc3dlciB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9xdWl6LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1F1aXonLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogWycuL3F1aXouY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3F1aXouY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlOiBRdWl6U3RhdGUgPSBRdWl6U3RhdGUuSU5JVElBTElaSU5HO1xyXG4gICAgbGFzdEFuc3dlckluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1aXpTZXJ2aWNlOiBRdWl6U2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUXVlc3Rpb25BbnN3ZXJlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1F1aXpGaW5pc2hlZCB8fCB0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuUVVFU1RJT05fQU5TV0VSRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUXVpekZpbmlzaGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuRklOSVNIRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnQoKTogUXVlc3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1aXpTZXJ2aWNlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbnN3ZXJDbGFzcyhpZHg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNsYXp6ID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5pc1F1ZXN0aW9uQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50LnJpZ2h0QW5zd2VySW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgY2xhenogPSAncmlnaHQtYW5zd2VyJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEFuc3dlckluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXp6ID0gJ3dyb25nLWFuc3dlcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXp6O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRBbnN3ZXIoaWR4OiBudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy5pc1F1ZXN0aW9uQW5zd2VyZWQpIHsgLy8gYXZvaWQgY2hhbmdpbmcgdGhlIGFuc3dlciFcclxuICAgICAgICAgICAgdGhpcy5sYXN0QW5zd2VySW5kZXggPSBpZHg7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFF1aXpBbnN3ZXIgPSB0aGlzLnF1aXpTZXJ2aWNlLmFuc3dlcihpZHgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5xdWl6U2VydmljZS5pc0xhc3RRdWVzdGlvbigpID8gUXVpelN0YXRlLkZJTklTSEVEIDogUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLm5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUXVpelN0YXRlLlFVRVNUSU9OX0lOX1BST0dSRVNTO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RBbnN3ZXJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGF0ZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2godGhpcy5xdWl6U2VydmljZS5jdXJyZW50QW5zd2VyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgUXVpekFuc3dlci5VTkFOU1dFUkVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbGlqYSB1bmEgcmVzcHVlc3RhLi4uJztcclxuICAgICAgICAgICAgY2FzZSBRdWl6QW5zd2VyLlJJR0hUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdSZXNwdWVzdGEgY29ycmVjdGEnO1xyXG4gICAgICAgICAgICBjYXNlIFF1aXpBbnN3ZXIuV1JPTkc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Jlc3B1ZXN0YSBpbmNvcnJlY3RhJztcclxuICAgICAgICAgICAgY2FzZSBRdWl6QW5zd2VyLkJMQU5LOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmVudW0gUXVpelN0YXRlIHtcclxuICAgIElOSVRJQUxJWklORyA9IDAsXHJcbiAgICBRVUVTVElPTl9JTl9QUk9HUkVTUyA9IDEsXHJcbiAgICBRVUVTVElPTl9BTlNXRVJFRCA9IDIsXHJcbiAgICBGSU5JU0hFRCA9IDNcclxufSJdfQ==