"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_service_1 = require("./question.service");
var ConfigService = /** @class */ (function () {
    function ConfigService(questionService) {
        this.questionService = questionService;
    }
    ConfigService.prototype.getQuestionsAmount = function () {
        return 10; // TODO
    };
    ConfigService.prototype.getSectionTitles = function () {
        return this.questionService.getSectionTitles(); // TODO
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [question_service_1.QuestionService])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx1REFBcUQ7QUFHckQ7SUFFSSx1QkFDYyxlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDMUMsQ0FBQztJQUVMLDBDQUFrQixHQUFsQjtRQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO0lBQ3RCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTztJQUMzRCxDQUFDO0lBWlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUlzQixrQ0FBZTtPQUhyQyxhQUFhLENBYXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4vcXVlc3Rpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcXVlc3Rpb25TZXJ2aWNlOiBRdWVzdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgZ2V0UXVlc3Rpb25zQW1vdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDEwOyAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdGlvblRpdGxlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb25TZXJ2aWNlLmdldFNlY3Rpb25UaXRsZXMoKTsgLy8gVE9ET1xyXG4gICAgfVxyXG59Il19