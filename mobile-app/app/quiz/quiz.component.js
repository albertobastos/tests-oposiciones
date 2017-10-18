"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var questions_service_1 = require("../common/services/questions.service");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(page, questionsService) {
        this.page = page;
        this.questionsService = questionsService;
        this.state = QuizState.INITIALIZING;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getRandomQuestions(5).subscribe(function (r) {
            _this.questions = r;
            _this.questionNumber = 0;
            _this.question = null;
            _this.rightCount = 0;
            _this.wrongCount = 0;
            _this.blankCount = 0;
            _this.advance();
        });
    };
    QuizComponent.prototype.sendAnswer = function (idx) {
        if (this.state === QuizState.QUESTION_IN_PROGRESS) {
            this.currentRightAnswer = this.question.rightAnswerIndex;
            if (idx === -1) {
                this.blankCount++;
                this.currentWrongAnswer = null;
            }
            else if (this.currentRightAnswer === idx) {
                this.rightCount++;
                this.currentWrongAnswer = null;
            }
            else {
                this.wrongCount++;
                this.currentWrongAnswer = idx;
            }
            this.state = QuizState.QUESTION_ANSWERED;
        }
    };
    QuizComponent.prototype.advance = function () {
        this.questionNumber++;
        this.question = this.questions[this.questionNumber - 1];
        this.currentRightAnswer = null;
        this.currentWrongAnswer = null;
        if (this.question) {
            this.state = QuizState.QUESTION_IN_PROGRESS;
        }
        else {
            this.state = QuizState.FINISHED;
            this.notaFinal = this.calcularNotaFinal();
        }
        this.cabecera = this.buildCabecera();
    };
    QuizComponent.prototype.buildCabecera = function () {
        if (this.question) {
            return "Pregunta #" + this.question.number + " (" + this.questionNumber + " de " + this.questions.length + ")";
        }
        else {
            return '';
        }
    };
    QuizComponent.prototype.calcularNotaFinal = function () {
        // cada respuesta incorrecta resta el 25% de una correcta
        var puntosPorCorrecta = 10 / this.questions.length;
        var puntosPorFallo = puntosPorCorrecta * 0.25;
        return this.rightCount * puntosPorCorrecta - this.wrongCount * puntosPorFallo;
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'Quiz',
            moduleId: module.id,
            styleUrls: ['./quiz.component.css'],
            templateUrl: './quiz.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            questions_service_1.QuestionsService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpREFBZ0Q7QUFFaEQsMEVBQXdFO0FBU3hFO0lBY0ksdUJBQ2MsSUFBVSxFQUNWLGdCQUFrQztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUxoRCxVQUFLLEdBQWMsU0FBUyxDQUFDLFlBQVksQ0FBQztJQU8xQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDbkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQ3pELEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGtCQUFrQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUNuQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsZUFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sVUFBSyxJQUFJLENBQUMsY0FBYyxZQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxNQUFHLENBQUM7UUFDcEcsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0kseURBQXlEO1FBRXpELElBQUksaUJBQWlCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksY0FBYyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztJQUNsRixDQUFDO0lBL0VRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBaUJzQixXQUFJO1lBQ1Esb0NBQWdCO09BaEJ2QyxhQUFhLENBaUZ6QjtJQUFELG9CQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksc0NBQWE7QUFtRjFCLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNWLHlEQUFnQixDQUFBO0lBQ2hCLHlFQUF3QixDQUFBO0lBQ3hCLG1FQUFxQixDQUFBO0lBQ3JCLGlEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi9jb21tb24vZGF0YS9xdWVzdGlvbic7XHJcbmltcG9ydCB7IFF1ZXN0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvcXVlc3Rpb25zLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1F1aXonLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogWycuL3F1aXouY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3F1aXouY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbltdO1xyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uOyAvLyBwcmVndW50YSBhY3R1YWxcclxuICAgIHF1ZXN0aW9uTnVtYmVyOiBudW1iZXI7IC8vIG7Dum1lcm8gZGUgcHJlZ3VudGEgYWN0dWFsXHJcbiAgICBjdXJyZW50UmlnaHRBbnN3ZXI6IG51bWJlcjtcclxuICAgIGN1cnJlbnRXcm9uZ0Fuc3dlcjogbnVtYmVyO1xyXG4gICAgcmlnaHRDb3VudDogbnVtYmVyO1xyXG4gICAgd3JvbmdDb3VudDogbnVtYmVyO1xyXG4gICAgYmxhbmtDb3VudDogbnVtYmVyO1xyXG4gICAgbm90YUZpbmFsOiBudW1iZXI7XHJcbiAgICBzdGF0ZTogUXVpelN0YXRlID0gUXVpelN0YXRlLklOSVRJQUxJWklORztcclxuICAgIGNhYmVjZXJhOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXN0aW9uc1NlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zU2VydmljZS5nZXRSYW5kb21RdWVzdGlvbnMoNSkuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHI7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25OdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yaWdodENvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy53cm9uZ0NvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ibGFua0NvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEFuc3dlcihpZHgpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlID09PSBRdWl6U3RhdGUuUVVFU1RJT05fSU5fUFJPR1JFU1MpIHsgLy8gaWdub3JlIG90aGVyIGNsaWNrc1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSaWdodEFuc3dlciA9IHRoaXMucXVlc3Rpb24ucmlnaHRBbnN3ZXJJbmRleDtcclxuICAgICAgICAgICAgaWYoaWR4ID09PSAtMSkgeyAvLyBkZWphciBlbiBibGFuY29cclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhbmtDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V3JvbmdBbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5jdXJyZW50UmlnaHRBbnN3ZXIgPT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXcm9uZ0Fuc3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyb25nQ291bnQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdyb25nQW5zd2VyID0gaWR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUXVpelN0YXRlLlFVRVNUSU9OX0FOU1dFUkVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZHZhbmNlKCkge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25OdW1iZXIrKztcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbk51bWJlci0xXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSaWdodEFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V3JvbmdBbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFF1aXpTdGF0ZS5RVUVTVElPTl9JTl9QUk9HUkVTUztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gUXVpelN0YXRlLkZJTklTSEVEO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGFGaW5hbCA9IHRoaXMuY2FsY3VsYXJOb3RhRmluYWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWJlY2VyYSA9IHRoaXMuYnVpbGRDYWJlY2VyYSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ2FiZWNlcmEoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgUHJlZ3VudGEgIyR7dGhpcy5xdWVzdGlvbi5udW1iZXJ9ICgke3RoaXMucXVlc3Rpb25OdW1iZXJ9IGRlICR7dGhpcy5xdWVzdGlvbnMubGVuZ3RofSlgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXJOb3RhRmluYWwoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBjYWRhIHJlc3B1ZXN0YSBpbmNvcnJlY3RhIHJlc3RhIGVsIDI1JSBkZSB1bmEgY29ycmVjdGFcclxuXHJcbiAgICAgICAgbGV0IHB1bnRvc1BvckNvcnJlY3RhID0gMTAgLyB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHB1bnRvc1BvckZhbGxvID0gcHVudG9zUG9yQ29ycmVjdGEgKiAwLjI1O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yaWdodENvdW50ICogcHVudG9zUG9yQ29ycmVjdGEgLSB0aGlzLndyb25nQ291bnQgKiBwdW50b3NQb3JGYWxsbztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmVudW0gUXVpelN0YXRlIHtcclxuICAgIElOSVRJQUxJWklORyA9IDAsXHJcbiAgICBRVUVTVElPTl9JTl9QUk9HUkVTUyA9IDEsXHJcbiAgICBRVUVTVElPTl9BTlNXRVJFRCA9IDIsXHJcbiAgICBGSU5JU0hFRCA9IDNcclxufSJdfQ==