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
        return [1, 10, 20, 50, 100];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx1REFBcUQ7QUFHckQ7SUFJSSx1QkFDYyxlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFOUMsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRU8sNENBQW9CLEdBQTVCLFVBQWdDLElBQVksRUFBRSxZQUFlO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDO0lBQ2pELENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixJQUFZLEVBQUUsS0FBVTtRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUEzQ1EsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQU1zQixrQ0FBZTtPQUxyQyxhQUFhLENBNEN6QjtJQUFELG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvblNlcnZpY2UgfSBmcm9tICcuL3F1ZXN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1trZXk6IHN0cmluZ106IGFueX07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRRdWVzdGlvbnNBbW91bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eU9yRGVmYXVsdCgncXVlc3Rpb25zQW1vdW50JywgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3Rpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eU9yRGVmYXVsdCgnc2VjdGlvbnMnLCB0aGlzLnF1ZXN0aW9uU2VydmljZS5nZXRTZWN0aW9uVGl0bGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFF1ZXN0aW9uc0Ftb3VudChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcGVydHkoJ3F1ZXN0aW9uc0Ftb3VudCcsIGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VjdGlvbnMoc2VjdGlvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgaWYoc2VjdGlvbnMgJiYgc2VjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnc2VjdGlvbnMnLCBzZWN0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFF1ZXN0aW9uc0Ftb3VudHMoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBbMSwgMTAsIDIwLCA1MCwgMTAwXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTZWN0aW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb25TZXJ2aWNlLmdldFNlY3Rpb25UaXRsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFByb3BlcnR5T3JEZWZhdWx0PFQ+KG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKTogVCB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXNbbmFtZV0gfHwgZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UHJvcGVydHkobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19