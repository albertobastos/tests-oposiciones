"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_service_1 = require("./question.service");
var ConfigService = /** @class */ (function () {
    function ConfigService(questionService) {
        this.questionService = questionService;
    }
    ConfigService.prototype.getQuestionsAmount = function () {
        return this.getPropertyOrDefault('questionsAmount', 10);
    };
    ConfigService.prototype.getSections = function () {
        return this.getPropertyOrDefault('sections', this.questionService.getSectionTitles());
    };
    ConfigService.prototype.setQuestionsAmount = function (amount) {
        this.setProperty('questionsAmount', amount);
    };
    ConfigService.prototype.setSections = function (sections) {
        if (sections && sections.length > 0) {
            return this.setProperty('sections', sections);
        }
    };
    ConfigService.prototype.getAllQuestionsAmounts = function () {
        return [10, 20, 50, 100];
    };
    ConfigService.prototype.getAllSections = function () {
        return this.questionService.getSectionTitles();
    };
    ConfigService.prototype.getPropertyOrDefault = function (name, defaultValue) {
        this.properties = this.properties || {};
        return this.properties[name] || defaultValue;
    };
    ConfigService.prototype.setProperty = function (name, value) {
        this.properties = this.properties || {};
        this.properties[name] = value;
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [question_service_1.QuestionService])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx1REFBcUQ7QUFHckQ7SUFJSSx1QkFDYyxlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFOUMsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFTyw0Q0FBb0IsR0FBNUIsVUFBZ0MsSUFBWSxFQUFFLFlBQWU7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLElBQVksRUFBRSxLQUFVO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQTNDUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBTXNCLGtDQUFlO09BTHJDLGFBQWEsQ0E0Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4vcXVlc3Rpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7W2tleTogc3RyaW5nXTogYW55fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcXVlc3Rpb25TZXJ2aWNlOiBRdWVzdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXN0aW9uc0Ftb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5T3JEZWZhdWx0KCdxdWVzdGlvbnNBbW91bnQnLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdGlvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5T3JEZWZhdWx0KCdzZWN0aW9ucycsIHRoaXMucXVlc3Rpb25TZXJ2aWNlLmdldFNlY3Rpb25UaXRsZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UXVlc3Rpb25zQW1vdW50KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eSgncXVlc3Rpb25zQW1vdW50JywgYW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWN0aW9ucyhzZWN0aW9uczogc3RyaW5nW10pIHtcclxuICAgICAgICBpZihzZWN0aW9ucyAmJiBzZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFByb3BlcnR5KCdzZWN0aW9ucycsIHNlY3Rpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUXVlc3Rpb25zQW1vdW50cygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsxMCwgMjAsIDUwLCAxMDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFNlY3Rpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvblNlcnZpY2UuZ2V0U2VjdGlvblRpdGxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UHJvcGVydHlPckRlZmF1bHQ8VD4obmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllc1tuYW1lXSB8fCBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMgfHwge307XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=