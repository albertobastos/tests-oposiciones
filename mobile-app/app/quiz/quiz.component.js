"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var quiz_service_1 = require("../common/services/quiz.service");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(page, routerExtensions, quizService) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.quizService = quizService;
        this.state = QuizState.INITIALIZING;
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
    QuizComponent.prototype.end = function () {
        //this.routerExtensions.navigate(['/quizresults']);
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'Quiz',
            moduleId: module.id,
            styleUrls: ['./quiz.component.css'],
            templateUrl: './quiz.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBRy9ELGdFQUEwRTtBQVMxRTtJQUtJLHVCQUNjLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsV0FBd0I7UUFGeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFOdEMsVUFBSyxHQUFjLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFRMUMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsc0JBQUksNkNBQWtCO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsaUJBQWlCLENBQUM7UUFDN0UsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0NBQWMsR0FBZCxVQUFlLEdBQVc7UUFDdEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDM0IsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUM7SUFDdEcsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0ksbURBQW1EO0lBQ3ZELENBQUM7SUF2RFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FRc0IsV0FBSTtZQUNRLHlCQUFnQjtZQUNyQiwwQkFBVztPQVI3QixhQUFhLENBeUR6QjtJQUFELG9CQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksc0NBQWE7QUEyRDFCLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNWLHlEQUFnQixDQUFBO0lBQ2hCLHlFQUF3QixDQUFBO0lBQ3hCLG1FQUFxQixDQUFBO0lBQ3JCLGlEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9kYXRhL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVpelNlcnZpY2UsIFF1aXpBbnN3ZXIgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvcXVpei5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdRdWl6JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9xdWl6LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9xdWl6LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHN0YXRlOiBRdWl6U3RhdGUgPSBRdWl6U3RhdGUuSU5JVElBTElaSU5HO1xyXG4gICAgbGFzdEFuc3dlckluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1aXpTZXJ2aWNlOiBRdWl6U2VydmljZVxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUXVlc3Rpb25BbnN3ZXJlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1F1aXpGaW5pc2hlZCB8fCB0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuUVVFU1RJT05fQU5TV0VSRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUXVpekZpbmlzaGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuRklOSVNIRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnQoKTogUXVlc3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1aXpTZXJ2aWNlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbnN3ZXJDbGFzcyhpZHg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNsYXp6ID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5pc1F1ZXN0aW9uQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50LnJpZ2h0QW5zd2VySW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgY2xhenogPSAncmlnaHQtYW5zd2VyJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEFuc3dlckluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXp6ID0gJ3dyb25nLWFuc3dlcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXp6O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRBbnN3ZXIoaWR4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxhc3RBbnN3ZXJJbmRleCA9IGlkeDtcclxuICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLmFuc3dlcihpZHgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnF1aXpTZXJ2aWNlLmlzTGFzdFF1ZXN0aW9uKCkgPyBRdWl6U3RhdGUuRklOSVNIRUQgOiBRdWl6U3RhdGUuUVVFU1RJT05fQU5TV0VSRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnF1aXpTZXJ2aWNlLmlzTGFzdFF1ZXN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWl6U2VydmljZS5uZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFF1aXpTdGF0ZS5RVUVTVElPTl9JTl9QUk9HUkVTUztcclxuICAgICAgICAgICAgdGhpcy5sYXN0QW5zd2VySW5kZXggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmQoKSB7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcXVpenJlc3VsdHMnXSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5lbnVtIFF1aXpTdGF0ZSB7XHJcbiAgICBJTklUSUFMSVpJTkcgPSAwLFxyXG4gICAgUVVFU1RJT05fSU5fUFJPR1JFU1MgPSAxLFxyXG4gICAgUVVFU1RJT05fQU5TV0VSRUQgPSAyLFxyXG4gICAgRklOSVNIRUQgPSAzXHJcbn0iXX0=