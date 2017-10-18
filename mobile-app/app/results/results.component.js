"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var base_component_1 = require("../common/base.component");
var quiz_service_1 = require("../common/services/quiz.service");
var ResultsComponent = /** @class */ (function (_super) {
    __extends(ResultsComponent, _super);
    function ResultsComponent(page, quizService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.quizService = quizService;
        return _this;
    }
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
}(base_component_1.BaseComponent));
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpREFBZ0Q7QUFDaEQsMkRBQXlEO0FBQ3pELGdFQUE4RDtBQVM5RDtJQUFzQyxvQ0FBYTtJQUMvQywwQkFDYyxJQUFVLEVBQ2IsV0FBd0I7UUFGbkMsWUFJSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUphLFVBQUksR0FBSixJQUFJLENBQU07UUFDYixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHbkMsQ0FBQztJQU5RLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FJc0IsV0FBSTtZQUNBLDBCQUFXO09BSDFCLGdCQUFnQixDQU81QjtJQUFELHVCQUFDO0NBQUEsQUFQRCxDQUFzQyw4QkFBYSxHQU9sRDtBQVBZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1aXpTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3F1aXouc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmVzdWx0cycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVzdWx0cy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVzdWx0cy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcGFnZTogUGFnZSxcclxuICAgICAgICBwdWJsaWMgcXVpelNlcnZpY2U6IFF1aXpTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwYWdlKTtcclxuICAgIH1cclxufSJdfQ==