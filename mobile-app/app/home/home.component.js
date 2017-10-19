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
        //this._devel_gotoQuiz();
        //this._devel_gotoSettings();
        //this._devel_gotoResults();
    };
    HomeComponent.prototype.startQuiz = function () {
        this.quizService.initQuiz();
        this.routerExtensions.navigate(['/quiz']);
    };
    HomeComponent.prototype._devel_gotoQuiz = function () {
        this.startQuiz();
    };
    HomeComponent.prototype._devel_gotoSettings = function () {
        this.routerExtensions.navigate(['/settings']);
    };
    HomeComponent.prototype._devel_gotoResults = function () {
        this.quizService.initQuiz();
        for (var i = 0; i < this.quizService.totalQuestions; i++) {
            this.quizService.answer(1);
            if (!this.quizService.isLastQuestion()) {
                this.quizService.nextQuestion();
            }
        }
        this.routerExtensions.navigate(['/results']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBQ2hELDJEQUF5RDtBQUN6RCxnRUFBOEQ7QUFROUQ7SUFBbUMsaUNBQWE7SUFFNUMsdUJBQ2MsSUFBVSxFQUNWLGdCQUFrQyxFQUNsQyxXQUF3QjtRQUh0QyxZQUtJLGtCQUFNLElBQUksQ0FBQyxTQUNkO1FBTGEsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBR3RDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0kseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyx1Q0FBZSxHQUF2QjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sMkNBQW1CLEdBQTNCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLDBDQUFrQixHQUExQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEMsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBdENRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSXNCLFdBQUk7WUFDUSx5QkFBZ0I7WUFDckIsMEJBQVc7T0FMN0IsYUFBYSxDQXVDekI7SUFBRCxvQkFBQztDQUFBLEFBdkNELENBQW1DLDhCQUFhLEdBdUMvQztBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFF1aXpTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3F1aXouc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBwYWdlOiBQYWdlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJvdGVjdGVkIHF1aXpTZXJ2aWNlOiBRdWl6U2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcihwYWdlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy90aGlzLl9kZXZlbF9nb3RvUXVpeigpO1xuICAgICAgICAvL3RoaXMuX2RldmVsX2dvdG9TZXR0aW5ncygpO1xuICAgICAgICAvL3RoaXMuX2RldmVsX2dvdG9SZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgc3RhcnRRdWl6KCkge1xuICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLmluaXRRdWl6KCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9xdWl6J10pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldmVsX2dvdG9RdWl6KCkge1xuICAgICAgICB0aGlzLnN0YXJ0UXVpeigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldmVsX2dvdG9TZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3NldHRpbmdzJ10pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldmVsX2dvdG9SZXN1bHRzKCkge1xuICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLmluaXRRdWl6KCk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5xdWl6U2VydmljZS50b3RhbFF1ZXN0aW9ucztpKyspIHtcbiAgICAgICAgICAgIHRoaXMucXVpelNlcnZpY2UuYW5zd2VyKDEpO1xuICAgICAgICAgICAgaWYoIXRoaXMucXVpelNlcnZpY2UuaXNMYXN0UXVlc3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVpelNlcnZpY2UubmV4dFF1ZXN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Jlc3VsdHMnXSk7XG4gICAgfVxufVxuIl19