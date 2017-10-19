"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var base_component_1 = require("../common/base.component");
var config_service_1 = require("../common/services/config.service");
var SettingsComponent = /** @class */ (function (_super) {
    __extends(SettingsComponent, _super);
    function SettingsComponent(page, configService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.configService = configService;
        return _this;
    }
    Object.defineProperty(SettingsComponent.prototype, "questionsAmount", {
        get: function () {
            return this.configService.getQuestionsAmount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "sections", {
        get: function () {
            return this.configService.getSections();
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.isAmount = function (amount) {
        return this.questionsAmount === amount;
    };
    SettingsComponent.prototype.isSectionSelected = function (section) {
        return this.sections.indexOf(section) >= 0;
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'settings',
            moduleId: module.id,
            styleUrls: ['./settings.component.css'],
            templateUrl: './settings.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            config_service_1.ConfigService])
    ], SettingsComponent);
    return SettingsComponent;
}(base_component_1.BaseComponent));
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUFnRDtBQUNoRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBU2xFO0lBQXVDLHFDQUFhO0lBQ2hELDJCQUNjLElBQVUsRUFDYixhQUE0QjtRQUZ2QyxZQUlJLGtCQUFNLElBQUksQ0FBQyxTQUNkO1FBSmEsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNiLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUd2QyxDQUFDO0lBRUQsc0JBQUksOENBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsb0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsT0FBZTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF0QlEsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQUlzQixXQUFJO1lBQ0UsOEJBQWE7T0FIOUIsaUJBQWlCLENBd0I3QjtJQUFELHdCQUFDO0NBQUEsQUF4QkQsQ0FBdUMsOEJBQWEsR0F3Qm5EO0FBeEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NldHRpbmdzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgICApIHsgXHJcbiAgICAgICAgc3VwZXIocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHF1ZXN0aW9uc0Ftb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0UXVlc3Rpb25zQW1vdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY3Rpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdTZXJ2aWNlLmdldFNlY3Rpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBbW91bnQoYW1vdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbnNBbW91bnQgPT09IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBpc1NlY3Rpb25TZWxlY3RlZChzZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9ucy5pbmRleE9mKHNlY3Rpb24pID49IDA7XHJcbiAgICB9XHJcblxyXG59Il19