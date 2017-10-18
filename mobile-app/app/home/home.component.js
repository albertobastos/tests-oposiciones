"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var quiz_service_1 = require("../common/services/quiz.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, routerExtensions, quizService) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.quizService = quizService;
        page.actionBarHidden = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBRWhELGdFQUE4RDtBQVE5RDtJQUVJLHVCQUNjLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsV0FBd0I7UUFGeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWhCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUlzQixXQUFJO1lBQ1EseUJBQWdCO1lBQ3JCLDBCQUFXO09BTDdCLGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5cbmltcG9ydCB7IFF1aXpTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL3F1aXouc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcm90ZWN0ZWQgcXVpelNlcnZpY2U6IFF1aXpTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzdGFydFF1aXooKSB7XG4gICAgICAgIHRoaXMucXVpelNlcnZpY2UuaW5pdFF1aXooKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3F1aXonXSk7XG4gICAgfVxufVxuIl19