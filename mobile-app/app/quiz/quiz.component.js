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
        // sobreescribimos el "Back" para pedirle confirmación, ya que hacerlo
        // implica perder todo el progreso del quiz actual
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
        this.routerExtensions.navigate(['/results']); // el día que soporten replaceUrl, ya no necesitaremos implementar el goBack de la pantalla de resultados
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyQ0FBc0Y7QUFDdEYscUNBQXFDO0FBQ3JDLHlDQUEyQztBQUMzQyxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELG9DQUFzQztBQUN0QywyREFBeUQ7QUFFekQsZ0VBQTBFO0FBUzFFO0lBQW1DLGlDQUFhO0lBSzVDLHVCQUNjLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsV0FBd0I7UUFIdEMsWUFLSSxrQkFBTSxJQUFJLENBQUMsU0FVZDtRQWRhLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTnRDLFdBQUssR0FBYyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBU3RDLHNFQUFzRTtRQUN0RSxrREFBa0Q7UUFDbEQsSUFBSSxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDZCxvQkFBUyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDaEIsb0JBQVMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBa0IsQ0FBQyx3QkFBd0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNuRyxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRUQsc0JBQUksNkNBQWtCO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUss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QUFBO0lBcEZRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBUXNCLFdBQUk7WUFDUSx5QkFBZ0I7WUFDckIsMEJBQVc7T0FSN0IsYUFBYSxDQXNGekI7SUFBRCxvQkFBQztDQUFBLEFBdEZELENBQW1DLDhCQUFhLEdBc0YvQztBQXRGWSxzQ0FBYTtBQXdGMUIsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1YseURBQWdCLENBQUE7SUFDaEIseUVBQXdCLENBQUE7SUFDeEIsbUVBQXFCLENBQUE7SUFDckIsaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9kYXRhL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVpelNlcnZpY2UsIFF1aXpBbnN3ZXIgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvcXVpei5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdRdWl6JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9xdWl6LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9xdWl6LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZTogUXVpelN0YXRlID0gUXVpelN0YXRlLklOSVRJQUxJWklORztcclxuICAgIGxhc3RBbnN3ZXJJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByb3RlY3RlZCBxdWl6U2VydmljZTogUXVpelNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHBhZ2UpO1xyXG4gICAgICAgIC8vIHNvYnJlZXNjcmliaW1vcyBlbCBcIkJhY2tcIiBwYXJhIHBlZGlybGUgY29uZmlybWFjacOzbiwgeWEgcXVlIGhhY2VybG9cclxuICAgICAgICAvLyBpbXBsaWNhIHBlcmRlciB0b2RvIGVsIHByb2dyZXNvIGRlbCBxdWl6IGFjdHVhbFxyXG4gICAgICAgIGxldCBiYWNrSGFuZGxlciA9IHRoaXMuZ29CYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgcGFnZS5vbignbG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0FuZHJvaWQgJiYgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBiYWNrSGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFnZS5vbigndW5sb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzQW5kcm9pZCAmJiBhcHBsaWNhdGlvbi5hbmRyb2lkLm9mZihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBiYWNrSGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUXVlc3Rpb25BbnN3ZXJlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1F1aXpGaW5pc2hlZCB8fCB0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuUVVFU1RJT05fQU5TV0VSRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUXVpekZpbmlzaGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuRklOSVNIRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnQoKTogUXVlc3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1aXpTZXJ2aWNlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbnN3ZXJDbGFzcyhpZHg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNsYXp6ID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5pc1F1ZXN0aW9uQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50LnJpZ2h0QW5zd2VySW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgY2xhenogPSAncmlnaHQtYW5zd2VyJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMubGFzdEFuc3dlckluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXp6ID0gJ3dyb25nLWFuc3dlcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXp6O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRBbnN3ZXIoaWR4OiBudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy5pc1F1ZXN0aW9uQW5zd2VyZWQpIHsgLy8gYXZvaWQgY2hhbmdpbmcgdGhlIGFuc3dlciFcclxuICAgICAgICAgICAgdGhpcy5sYXN0QW5zd2VySW5kZXggPSBpZHg7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFF1aXpBbnN3ZXIgPSB0aGlzLnF1aXpTZXJ2aWNlLmFuc3dlcihpZHgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5xdWl6U2VydmljZS5pc0xhc3RRdWVzdGlvbigpID8gUXVpelN0YXRlLkZJTklTSEVEIDogUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLm5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUXVpelN0YXRlLlFVRVNUSU9OX0lOX1BST0dSRVNTO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RBbnN3ZXJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjayhkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oXHJcbiAgICAgICAgICAgICdUb2RvIHR1IHByb2dyZXNvIGVuIGVsIHRlc3QgYWN0dWFsIHNlIHBlcmRlcsOhLiDCv1NlZ3VybyBxdWUgcXVpZXJlcyBzYWxpcj8nXHJcbiAgICAgICAgKS50aGVuKHJlc3VsdCA9PiByZXN1bHQgJiYgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1Jlc3VsdHMoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Jlc3VsdHMnXSk7IC8vIGVsIGTDrWEgcXVlIHNvcG9ydGVuIHJlcGxhY2VVcmwsIHlhIG5vIG5lY2VzaXRhcmVtb3MgaW1wbGVtZW50YXIgZWwgZ29CYWNrIGRlIGxhIHBhbnRhbGxhIGRlIHJlc3VsdGFkb3NcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMucXVpelNlcnZpY2UuY3VycmVudEFuc3dlclJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYXNlIFF1aXpBbnN3ZXIuVU5BTlNXRVJFRDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnRWxpamEgdW5hIHJlc3B1ZXN0YS4uLic7XHJcbiAgICAgICAgICAgIGNhc2UgUXVpekFuc3dlci5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnUmVzcHVlc3RhIGNvcnJlY3RhJztcclxuICAgICAgICAgICAgY2FzZSBRdWl6QW5zd2VyLldST05HOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdSZXNwdWVzdGEgaW5jb3JyZWN0YSc7XHJcbiAgICAgICAgICAgIGNhc2UgUXVpekFuc3dlci5CTEFOSzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5lbnVtIFF1aXpTdGF0ZSB7XHJcbiAgICBJTklUSUFMSVpJTkcgPSAwLFxyXG4gICAgUVVFU1RJT05fSU5fUFJPR1JFU1MgPSAxLFxyXG4gICAgUVVFU1RJT05fQU5TV0VSRUQgPSAyLFxyXG4gICAgRklOSVNIRUQgPSAzXHJcbn0iXX0=