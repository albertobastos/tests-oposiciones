"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var quiz_service_1 = require("../common/services/quiz.service");
var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(page, quizService) {
        this.page = page;
        this.quizService = quizService;
        page.actionBarHidden = true;
    }
    ResultsComponent.prototype.ngOnInit = function () { };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'results',
            moduleId: module.id,
            styleUrls: ['./results.component.css'],
            templateUrl: './results.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            quiz_service_1.QuizService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpREFBZ0Q7QUFDaEQsZ0VBQThEO0FBUzlEO0lBQ0ksMEJBQ2MsSUFBVSxFQUNiLFdBQXdCO1FBRHJCLFNBQUksR0FBSixJQUFJLENBQU07UUFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUUvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFSTCxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBSXNCLFdBQUk7WUFDQSwwQkFBVztPQUgxQixnQkFBZ0IsQ0FTNUI7SUFBRCx1QkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBRdWl6U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9xdWl6LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Jlc3VsdHMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogWycuL3Jlc3VsdHMuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcGFnZTogUGFnZSxcclxuICAgICAgICBwdWJsaWMgcXVpelNlcnZpY2U6IFF1aXpTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxufSJdfQ==