"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_1 = require("application");
var platform_1 = require("platform");
var application = require("application");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var base_component_1 = require("../common/base.component");
var quiz_service_1 = require("../common/services/quiz.service");
var QuizComponent = /** @class */ (function (_super) {
    __extends(QuizComponent, _super);
    function QuizComponent(page, routerExtensions, quizService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.routerExtensions = routerExtensions;
        _this.quizService = quizService;
        _this.state = QuizState.INITIALIZING;
        var backHandler = _this.goBack.bind(_this);
        page.on('loaded', function () {
            platform_1.isAndroid && application.android.on(application_1.AndroidApplication.activityBackPressedEvent, backHandler);
        });
        page.on('unloaded', function () {
            platform_1.isAndroid && application.android.off(application_1.AndroidApplication.activityBackPressedEvent, backHandler);
        });
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
    QuizComponent.prototype.goBack = function (data) {
        var _this = this;
        data.cancel = true;
        dialogs.confirm('Todo tu progreso en el test actual se perderá. ¿Seguro que quieres salir?').then(function (result) { return result && _this.routerExtensions.back(); });
    };
    QuizComponent.prototype.goToResults = function () {
        this.routerExtensions.navigate(['/results'], { replaceUrl: true });
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
            router_1.RouterExtensions,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyQ0FBc0Y7QUFDdEYscUNBQXFDO0FBQ3JDLHlDQUEyQztBQUMzQyxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELG9DQUFzQztBQUN0QywyREFBeUQ7QUFFekQsZ0VBQTBFO0FBUzFFO0lBQW1DLGlDQUFhO0lBSzVDLHVCQUNjLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsV0FBd0I7UUFIdEMsWUFLSSxrQkFBTSxJQUFJLENBQUMsU0FRZDtRQVphLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTnRDLFdBQUssR0FBYyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBU3RDLElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2Qsb0JBQVMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyx3QkFBd0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsRyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ2hCLG9CQUFTLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWtCLENBQUMsd0JBQXdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkcsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLGlCQUFpQixDQUFD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USxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVFzQixXQUFJO1lBQ1EseUJBQWdCO1lBQ3JCLDBCQUFXO09BUjdCLGFBQWEsQ0FvRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBGRCxDQUFtQyw4QkFBYSxHQW9GL0M7QUFwRlksc0NBQWE7QUFzRjFCLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNWLHlEQUFnQixDQUFBO0lBQ2hCLHlFQUF3QixDQUFBO0lBQ3hCLG1FQUFxQixDQUFBO0lBQ3JCLGlEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi9jb21tb24vZGF0YS9xdWVzdGlvbic7XHJcbmltcG9ydCB7IFF1aXpTZXJ2aWNlLCBRdWl6QW5zd2VyIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3F1aXouc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnUXVpeicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcXVpei5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcXVpei5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWl6Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGU6IFF1aXpTdGF0ZSA9IFF1aXpTdGF0ZS5JTklUSUFMSVpJTkc7XHJcbiAgICBsYXN0QW5zd2VySW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcGFnZTogUGFnZSxcclxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcm90ZWN0ZWQgcXVpelNlcnZpY2U6IFF1aXpTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwYWdlKTtcclxuICAgICAgICBsZXQgYmFja0hhbmRsZXIgPSB0aGlzLmdvQmFjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHBhZ2Uub24oJ2xvYWRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaXNBbmRyb2lkICYmIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgYmFja0hhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhZ2Uub24oJ3VubG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0FuZHJvaWQgJiYgYXBwbGljYXRpb24uYW5kcm9pZC5vZmYoQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgYmFja0hhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1F1ZXN0aW9uQW5zd2VyZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNRdWl6RmluaXNoZWQgfHwgdGhpcy5zdGF0ZSA9PT0gUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1F1aXpGaW5pc2hlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUXVpelN0YXRlLkZJTklTSEVEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50KCk6IFF1ZXN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWl6U2VydmljZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5zd2VyQ2xhc3MoaWR4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjbGF6eiA9ICcnO1xyXG4gICAgICAgIGlmKHRoaXMuaXNRdWVzdGlvbkFuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudC5yaWdodEFuc3dlckluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXp6ID0gJ3JpZ2h0LWFuc3dlcic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmxhc3RBbnN3ZXJJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBjbGF6eiA9ICd3cm9uZy1hbnN3ZXInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGF6ejtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQW5zd2VyKGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNRdWVzdGlvbkFuc3dlcmVkKSB7IC8vIGF2b2lkIGNoYW5naW5nIHRoZSBhbnN3ZXIhXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEFuc3dlckluZGV4ID0gaWR4O1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBRdWl6QW5zd2VyID0gdGhpcy5xdWl6U2VydmljZS5hbnN3ZXIoaWR4KTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSA/IFF1aXpTdGF0ZS5GSU5JU0hFRCA6IFF1aXpTdGF0ZS5RVUVTVElPTl9BTlNXRVJFRDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnF1aXpTZXJ2aWNlLmlzTGFzdFF1ZXN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWl6U2VydmljZS5uZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFF1aXpTdGF0ZS5RVUVTVElPTl9JTl9QUk9HUkVTUztcclxuICAgICAgICAgICAgdGhpcy5sYXN0QW5zd2VySW5kZXggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpIHtcclxuICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKFxyXG4gICAgICAgICAgICAnVG9kbyB0dSBwcm9ncmVzbyBlbiBlbCB0ZXN0IGFjdHVhbCBzZSBwZXJkZXLDoS4gwr9TZWd1cm8gcXVlIHF1aWVyZXMgc2FsaXI/J1xyXG4gICAgICAgICkudGhlbihyZXN1bHQgPT4gcmVzdWx0ICYmIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9SZXN1bHRzKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9yZXN1bHRzJ10sIHtyZXBsYWNlVXJsOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnF1aXpTZXJ2aWNlLmN1cnJlbnRBbnN3ZXJSZXN1bHQpIHtcclxuICAgICAgICAgICAgY2FzZSBRdWl6QW5zd2VyLlVOQU5TV0VSRUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0VsaWphIHVuYSByZXNwdWVzdGEuLi4nO1xyXG4gICAgICAgICAgICBjYXNlIFF1aXpBbnN3ZXIuUklHSFQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Jlc3B1ZXN0YSBjb3JyZWN0YSc7XHJcbiAgICAgICAgICAgIGNhc2UgUXVpekFuc3dlci5XUk9ORzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnUmVzcHVlc3RhIGluY29ycmVjdGEnO1xyXG4gICAgICAgICAgICBjYXNlIFF1aXpBbnN3ZXIuQkxBTks6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZW51bSBRdWl6U3RhdGUge1xyXG4gICAgSU5JVElBTElaSU5HID0gMCxcclxuICAgIFFVRVNUSU9OX0lOX1BST0dSRVNTID0gMSxcclxuICAgIFFVRVNUSU9OX0FOU1dFUkVEID0gMixcclxuICAgIEZJTklTSEVEID0gM1xyXG59Il19