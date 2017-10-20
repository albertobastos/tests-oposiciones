"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var question_service_1 = require("./question.service");
var ConfigService = /** @class */ (function () {
    function ConfigService(questionService) {
        this.questionService = questionService;
        // si hacemos un cambio en los settings, los reseteamos
        if (appSettings.getString("VERSION") !== ConfigService_1.SETTINGS_VERSION) {
            appSettings.clear();
            appSettings.setString("VERSION", ConfigService_1.SETTINGS_VERSION);
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
    ConfigService.SETTINGS_VERSION = "0.1";
    ConfigService = ConfigService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [question_service_1.QuestionService])
    ], ConfigService);
    return ConfigService;
    var ConfigService_1;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxrREFBb0Q7QUFFcEQsdURBQXFEO0FBR3JEO0lBSUksdUJBQ2MsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRTFDLHVEQUF1RDtRQUN2RCxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLGVBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDckUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGVBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDTCxDQUFDO3NCQVpRLGFBQWE7SUFjdEIsMENBQWtCLEdBQWxCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbkQsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsTUFBYztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsR0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUFzQixHQUF0QjtRQUNJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNkVBQTZFO0lBRXJFLDRDQUFvQixHQUE1QixVQUE2QixJQUFZLEVBQUUsWUFBcUI7UUFDNUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDO0lBQ3ZELENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixJQUFZLEVBQUUsS0FBYTtRQUMzQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBcERNLDhCQUFnQixHQUFHLEtBQUssQ0FBQztJQUZ2QixhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBTXNCLGtDQUFlO09BTHJDLGFBQWEsQ0F1RHpCO0lBQUQsb0JBQUM7O0NBQUEsQUF2REQsSUF1REM7QUF2RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4vcXVlc3Rpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgICBzdGF0aWMgU0VUVElOR1NfVkVSU0lPTiA9IFwiMC4xXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICAvLyBzaSBoYWNlbW9zIHVuIGNhbWJpbyBlbiBsb3Mgc2V0dGluZ3MsIGxvcyByZXNldGVhbW9zXHJcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiVkVSU0lPTlwiKSAhPT0gQ29uZmlnU2VydmljZS5TRVRUSU5HU19WRVJTSU9OKSB7XHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcIlZFUlNJT05cIiwgQ29uZmlnU2VydmljZS5TRVRUSU5HU19WRVJTSU9OKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UXVlc3Rpb25zQW1vdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMuZ2V0UHJvcGVydHlPckRlZmF1bHQoJ3F1ZXN0aW9uc0Ftb3VudCcsICcnK3RoaXMuZ2V0QWxsUXVlc3Rpb25zQW1vdW50cygpWzBdKTtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdGlvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLmdldFByb3BlcnR5T3JEZWZhdWx0KCdzZWN0aW9ucycpO1xyXG4gICAgICAgIGlmKHN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uU2VydmljZS5nZXRTZWN0aW9uVGl0bGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFF1ZXN0aW9uc0Ftb3VudChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcGVydHkoJ3F1ZXN0aW9uc0Ftb3VudCcsICcnK2Ftb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VjdGlvbnMoc2VjdGlvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgaWYoc2VjdGlvbnMgJiYgc2VjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQcm9wZXJ0eSgnc2VjdGlvbnMnLCBKU09OLnN0cmluZ2lmeShzZWN0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxRdWVzdGlvbnNBbW91bnRzKCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gWzEwLCAyMCwgNTAsIDEwMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsU2VjdGlvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uU2VydmljZS5nZXRTZWN0aW9uVGl0bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG8gZ3VhcmRhbW9zIHRvZG9zIGNvbW8gU3RyaW5nLCBubyBlcyBtdXkgZWZpY2llbnRlIHBlcm8gY3VtcGxlIGVsIHRyYWJham9cclxuXHJcbiAgICBwcml2YXRlIGdldFByb3BlcnR5T3JEZWZhdWx0KG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKG5hbWUpIHx8IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFByb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn0iXX0=