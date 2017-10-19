"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var base_component_1 = require("../common/base.component");
var quiz_service_1 = require("../common/services/quiz.service");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(page, routerExtensions, quizService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.routerExtensions = routerExtensions;
        _this.quizService = quizService;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.startQuiz(); // just devel
    };
    HomeComponent.prototype.startQuiz = function () {
        this.quizService.initQuiz();
        this.routerExtensions.navigate(['/quiz']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            styleUrls: ["./home.component.css"],
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            quiz_service_1.QuizService])
    ], HomeComponent);
    return HomeComponent;
}(base_component_1.BaseComponent));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBQ2hELDJEQUF5RDtBQUN6RCxnRUFBOEQ7QUFROUQ7SUFBbUMsaUNBQWE7SUFFNUMsdUJBQ2MsSUFBVSxFQUNWLGdCQUFrQyxFQUNsQyxXQUF3QjtRQUh0QyxZQUtJLGtCQUFNLElBQUksQ0FBQyxTQUNkO1FBTGEsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBR3RDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsYUFBYTtJQUNuQyxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWpCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUlzQixXQUFJO1lBQ1EseUJBQWdCO1lBQ3JCLDBCQUFXO09BTDdCLGFBQWEsQ0FrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxCRCxDQUFtQyw4QkFBYSxHQWtCL0M7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWl6U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9xdWl6LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcGFnZTogUGFnZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByb3RlY3RlZCBxdWl6U2VydmljZTogUXVpelNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIocGFnZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRRdWl6KCk7IC8vIGp1c3QgZGV2ZWxcbiAgICB9XG5cbiAgICBzdGFydFF1aXooKSB7XG4gICAgICAgIHRoaXMucXVpelNlcnZpY2UuaW5pdFF1aXooKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3F1aXonXSk7XG4gICAgfVxufVxuIl19