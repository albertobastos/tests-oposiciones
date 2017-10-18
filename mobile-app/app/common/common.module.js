"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_service_1 = require("./services/question.service");
var quiz_service_1 = require("./services/quiz.service");
var config_service_1 = require("./services/config.service");
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [],
            declarations: [],
            providers: [question_service_1.QuestionService, quiz_service_1.QuizService, config_service_1.ConfigService],
        })
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0VBQThEO0FBQzlELHdEQUFzRDtBQUN0RCw0REFBMEQ7QUFRMUQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFOeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1NBQzNELENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcXVlc3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9xdWl6LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW10sXHJcbiAgICBleHBvcnRzOiBbXSxcclxuICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICBwcm92aWRlcnM6IFtRdWVzdGlvblNlcnZpY2UsIFF1aXpTZXJ2aWNlLCBDb25maWdTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZHVsZSB7IH1cclxuIl19