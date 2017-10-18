"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var quiz_service_1 = require("../common/services/quiz.service");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(page, quizService) {
        this.page = page;
        this.quizService = quizService;
        this.state = QuizState.INITIALIZING;
        page.actionBarHidden = true;
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
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
}());
exports.QuizComponent = QuizComponent;
var QuizState;
(function (QuizState) {
    QuizState[QuizState["INITIALIZING"] = 0] = "INITIALIZING";
    QuizState[QuizState["QUESTION_IN_PROGRESS"] = 1] = "QUESTION_IN_PROGRESS";
    QuizState[QuizState["QUESTION_ANSWERED"] = 2] = "QUESTION_ANSWERED";
    QuizState[QuizState["FINISHED"] = 3] = "FINISHED";
})(QuizState || (QuizState = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpREFBZ0Q7QUFHaEQsZ0VBQTBFO0FBUzFFO0lBS0ksdUJBQ2MsSUFBVSxFQUNWLFdBQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUx0QyxVQUFLLEdBQWMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQU90QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQkFBSSw2Q0FBa0I7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsR0FBVztRQUN0QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUMzQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUMzQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN0RyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQW5EUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVFzQixXQUFJO1lBQ0csMEJBQVc7T0FQN0IsYUFBYSxDQXFEekI7SUFBRCxvQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLHNDQUFhO0FBdUQxQixJQUFLLFNBS0o7QUFMRCxXQUFLLFNBQVM7SUFDVix5REFBZ0IsQ0FBQTtJQUNoQix5RUFBd0IsQ0FBQTtJQUN4QixtRUFBcUIsQ0FBQTtJQUNyQixpREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9kYXRhL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVpelNlcnZpY2UsIFF1aXpBbnN3ZXIgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvcXVpei5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdRdWl6JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9xdWl6LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9xdWl6LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHN0YXRlOiBRdWl6U3RhdGUgPSBRdWl6U3RhdGUuSU5JVElBTElaSU5HO1xyXG4gICAgbGFzdEFuc3dlckluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1aXpTZXJ2aWNlOiBRdWl6U2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1F1ZXN0aW9uQW5zd2VyZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNRdWl6RmluaXNoZWQgfHwgdGhpcy5zdGF0ZSA9PT0gUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1F1aXpGaW5pc2hlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUXVpelN0YXRlLkZJTklTSEVEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50KCk6IFF1ZXN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWl6U2VydmljZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5zd2VyQ2xhc3MoaWR4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjbGF6eiA9ICcnO1xyXG4gICAgICAgIGlmKHRoaXMuaXNRdWVzdGlvbkFuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudC5yaWdodEFuc3dlckluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXp6ID0gJ3JpZ2h0LWFuc3dlcic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RBbnN3ZXJJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBjbGF6eiA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGF6ejtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQW5zd2VyKGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0QW5zd2VySW5kZXggPSBpZHg7XHJcbiAgICAgICAgdGhpcy5xdWl6U2VydmljZS5hbnN3ZXIoaWR4KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5xdWl6U2VydmljZS5pc0xhc3RRdWVzdGlvbigpID8gUXVpelN0YXRlLkZJTklTSEVEIDogUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRRdWVzdGlvbigpIHtcclxuICAgICAgICBpZighdGhpcy5xdWl6U2VydmljZS5pc0xhc3RRdWVzdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVpelNlcnZpY2UubmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBRdWl6U3RhdGUuUVVFU1RJT05fSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEFuc3dlckluZGV4ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5lbnVtIFF1aXpTdGF0ZSB7XHJcbiAgICBJTklUSUFMSVpJTkcgPSAwLFxyXG4gICAgUVVFU1RJT05fSU5fUFJPR1JFU1MgPSAxLFxyXG4gICAgUVVFU1RJT05fQU5TV0VSRUQgPSAyLFxyXG4gICAgRklOSVNIRUQgPSAzXHJcbn0iXX0=