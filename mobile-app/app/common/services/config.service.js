"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var question_service_1 = require("./question.service");
var ConfigService = /** @class */ (function () {
    function ConfigService(questionService) {
        this.questionService = questionService;
        // si hacemos un cambio en los settings, los reseteamos
        if (appSettings.getString("VERSION") !== ConfigService_1.CONFIG_VERSION) {
            appSettings.clear();
            appSettings.setString("VERSION", ConfigService_1.CONFIG_VERSION);
        }
    }
    ConfigService_1 = ConfigService;
    ConfigService.prototype.getQuestionsAmount = function () {
        var str = this.getPropertyOrDefault('questionsAmount', '' + this.getAllQuestionsAmounts()[0]);
        return Number(str);
    };
    ConfigService.prototype.getSections = function () {
        var str = this.getPropertyOrDefault('sections');
        if (str) {
            return JSON.parse(str);
        }
        else {
            return this.questionService.getSectionTitles();
        }
    };
    ConfigService.prototype.setQuestionsAmount = function (amount) {
        this.setProperty('questionsAmount', '' + amount);
    };
    ConfigService.prototype.setSections = function (sections) {
        if (sections && sections.length > 0) {
            return this.setProperty('sections', JSON.stringify(sections));
        }
    };
    ConfigService.prototype.getAllQuestionsAmounts = function () {
        return [10, 20, 50, 100];
    };
    ConfigService.prototype.getAllSections = function () {
        return this.questionService.getSectionTitles();
    };
    // lo guardamos todos como String, no es muy eficiente pero cumple el trabajo
    ConfigService.prototype.getPropertyOrDefault = function (name, defaultValue) {
        return appSettings.getString(name) || defaultValue;
    };
    ConfigService.prototype.setProperty = function (name, value) {
        appSettings.setString(name, value);
    };
    ConfigService.CONFIG_VERSION = "0.2";
    ConfigService = ConfigService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [question_service_1.QuestionService])
    ], ConfigService);
    return ConfigService;
    var ConfigService_1;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxrREFBb0Q7QUFFcEQsdURBQXFEO0FBR3JEO0lBSUksdUJBQ2MsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRTFDLHVEQUF1RDtRQUN2RCxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLGVBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ25FLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxlQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNMLENBQUM7c0JBWlEsYUFBYTtJQWN0QiwwQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFrQixHQUFsQixVQUFtQixNQUFjO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxHQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksUUFBa0I7UUFDMUIsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCw2RUFBNkU7SUFFckUsNENBQW9CLEdBQTVCLFVBQTZCLElBQVksRUFBRSxZQUFxQjtRQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUM7SUFDdkQsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLElBQVksRUFBRSxLQUFhO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFwRE0sNEJBQWMsR0FBRyxLQUFLLENBQUM7SUFGckIsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQU1zQixrQ0FBZTtPQUxyQyxhQUFhLENBdUR6QjtJQUFELG9CQUFDOztDQUFBLEFBdkRELElBdURDO0FBdkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvblNlcnZpY2UgfSBmcm9tICcuL3F1ZXN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblxyXG4gICAgc3RhdGljIENPTkZJR19WRVJTSU9OID0gXCIwLjJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcXVlc3Rpb25TZXJ2aWNlOiBRdWVzdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIHNpIGhhY2Vtb3MgdW4gY2FtYmlvIGVuIGxvcyBzZXR0aW5ncywgbG9zIHJlc2V0ZWFtb3NcclxuICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJWRVJTSU9OXCIpICE9PSBDb25maWdTZXJ2aWNlLkNPTkZJR19WRVJTSU9OKSB7XHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcIlZFUlNJT05cIiwgQ29uZmlnU2VydmljZS5DT05GSUdfVkVSU0lPTik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXN0aW9uc0Ftb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLmdldFByb3BlcnR5T3JEZWZhdWx0KCdxdWVzdGlvbnNBbW91bnQnLCAnJyt0aGlzLmdldEFsbFF1ZXN0aW9uc0Ftb3VudHMoKVswXSk7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3Rpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgc3RyID0gdGhpcy5nZXRQcm9wZXJ0eU9yRGVmYXVsdCgnc2VjdGlvbnMnKTtcclxuICAgICAgICBpZihzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvblNlcnZpY2UuZ2V0U2VjdGlvblRpdGxlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRRdWVzdGlvbnNBbW91bnQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KCdxdWVzdGlvbnNBbW91bnQnLCAnJythbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlY3Rpb25zKHNlY3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmKHNlY3Rpb25zICYmIHNlY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvcGVydHkoJ3NlY3Rpb25zJywgSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUXVlc3Rpb25zQW1vdW50cygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsxMCwgMjAsIDUwLCAxMDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFNlY3Rpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvblNlcnZpY2UuZ2V0U2VjdGlvblRpdGxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxvIGd1YXJkYW1vcyB0b2RvcyBjb21vIFN0cmluZywgbm8gZXMgbXV5IGVmaWNpZW50ZSBwZXJvIGN1bXBsZSBlbCB0cmFiYWpvXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQcm9wZXJ0eU9yRGVmYXVsdChuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhuYW1lKSB8fCBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG59Il19