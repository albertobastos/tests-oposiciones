"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var base_component_1 = require("../common/base.component");
var config_service_1 = require("../common/services/config.service");
var SettingsComponent = /** @class */ (function (_super) {
    __extends(SettingsComponent, _super);
    function SettingsComponent(page, routerExtensions, configService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.routerExtensions = routerExtensions;
        _this.configService = configService;
        return _this;
    }
    Object.defineProperty(SettingsComponent.prototype, "questionsAmount", {
        get: function () {
            return this.configService.getQuestionsAmount();
        },
        set: function (amount) {
            this.configService.setQuestionsAmount(amount);
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
    SettingsComponent.prototype.toggleSection = function (section) {
        var tmp = this.sections.slice(); // create a copy!
        var idx = tmp.indexOf(section);
        if (idx >= 0) {
            tmp.splice(idx, 1);
        }
        else {
            tmp.push(section);
        }
        this.configService.setSections(tmp);
    };
    SettingsComponent.prototype.accept = function () {
        this.routerExtensions.navigate(['/home']);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'settings',
            moduleId: module.id,
            styleUrls: ['./settings.component.css'],
            templateUrl: './settings.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            config_service_1.ConfigService])
    ], SettingsComponent);
    return SettingsComponent;
}(base_component_1.BaseComponent));
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUFnRDtBQUNoRCxzREFBK0Q7QUFDL0QsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQVNsRTtJQUF1QyxxQ0FBYTtJQUNoRCwyQkFDYyxJQUFVLEVBQ1YsZ0JBQWtDLEVBQ3JDLGFBQTRCO1FBSHZDLFlBS0ksa0JBQU0sSUFBSSxDQUFDLFNBQ2Q7UUFMYSxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNyQyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFHdkMsQ0FBQztJQUVELHNCQUFJLDhDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNuRCxDQUFDO2FBTUQsVUFBb0IsTUFBYztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQVJBO0lBRUQsc0JBQUksdUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBTUQsb0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsT0FBZTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsT0FBZTtRQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsaUJBQWlCO1FBQ2xELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUExQ1EsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQUlzQixXQUFJO1lBQ1EseUJBQWdCO1lBQ3RCLDhCQUFhO09BSjlCLGlCQUFpQixDQTRDN0I7SUFBRCx3QkFBQztDQUFBLEFBNUNELENBQXVDLDhCQUFhLEdBNENuRDtBQTVDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogWycuL3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHVibGljIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcclxuICAgICkgeyBcclxuICAgICAgICBzdXBlcihwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcXVlc3Rpb25zQW1vdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU2VydmljZS5nZXRRdWVzdGlvbnNBbW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VjdGlvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0U2VjdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcXVlc3Rpb25zQW1vdW50KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldFF1ZXN0aW9uc0Ftb3VudChhbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQW1vdW50KGFtb3VudDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb25zQW1vdW50ID09PSBhbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWN0aW9uU2VsZWN0ZWQoc2VjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvbnMuaW5kZXhPZihzZWN0aW9uKSA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNlY3Rpb24oc2VjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuc2VjdGlvbnMuc2xpY2UoKTsgLy8gY3JlYXRlIGEgY29weSFcclxuICAgICAgICBsZXQgaWR4ID0gdG1wLmluZGV4T2Yoc2VjdGlvbik7XHJcbiAgICAgICAgaWYoaWR4ID49IDApIHsgLy8gcmVtb3ZlXHJcbiAgICAgICAgICAgIHRtcC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBhZGRcclxuICAgICAgICAgICAgdG1wLnB1c2goc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5zZXRTZWN0aW9ucyh0bXApO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgIH1cclxuXHJcbn0iXX0=