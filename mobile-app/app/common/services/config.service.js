"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_service_1 = require("./question.service");
var ConfigService = /** @class */ (function () {
    function ConfigService(questionService) {
        this.questionService = questionService;
        this.questionsAmount = this.getPropertyOrDefault('questionsAmount', 10);
        this.sections = this.getPropertyOrDefault('sections', this.getAllSections());
    }
    ConfigService.prototype.getQuestionsAmount = function () {
        return 10; // TODO
    };
    ConfigService.prototype.getSections = function () {
        return this.questionService.getSectionTitles(); // TODO
    };
    ConfigService.prototype.getAllowedQuestionsAmounts = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx1REFBcUQ7QUFHckQ7SUFNSSx1QkFDYyxlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFFMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTztJQUN0QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO0lBQzNELENBQUM7SUFFRCxrREFBMEIsR0FBMUI7UUFDSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVPLDRDQUFvQixHQUE1QixVQUFnQyxJQUFZLEVBQUUsWUFBZTtRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQztJQUNqRCxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsSUFBWSxFQUFFLEtBQVU7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBckNRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FRc0Isa0NBQWU7T0FQckMsYUFBYSxDQXNDekI7SUFBRCxvQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9xdWVzdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xyXG4gICAgcXVlc3Rpb25zQW1vdW50OiBudW1iZXI7ICAgICAgICAvLyBwcmVndW50YXMgcG9yIHRlc3RcclxuICAgIHNlY3Rpb25zOiBzdHJpbmdbXTsgICAgICAgICAgICAgLy8gc2VjY2lvbmVzIGEgaW5jbHVpclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBxdWVzdGlvblNlcnZpY2U6IFF1ZXN0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNBbW91bnQgPSB0aGlzLmdldFByb3BlcnR5T3JEZWZhdWx0KCdxdWVzdGlvbnNBbW91bnQnLCAxMCk7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHlPckRlZmF1bHQoJ3NlY3Rpb25zJywgdGhpcy5nZXRBbGxTZWN0aW9ucygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRRdWVzdGlvbnNBbW91bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTA7IC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWN0aW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb25TZXJ2aWNlLmdldFNlY3Rpb25UaXRsZXMoKTsgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbG93ZWRRdWVzdGlvbnNBbW91bnRzKCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gWzEwLCAyMCwgNTAsIDEwMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsU2VjdGlvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uU2VydmljZS5nZXRTZWN0aW9uVGl0bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQcm9wZXJ0eU9yRGVmYXVsdDxUPihuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzW25hbWVdIHx8IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFByb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==