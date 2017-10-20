"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_1 = require("application");
var platform_1 = require("platform");
var application = require("application");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var base_component_1 = require("../common/base.component");
var quiz_service_1 = require("../common/services/quiz.service");
var ResultsComponent = /** @class */ (function (_super) {
    __extends(ResultsComponent, _super);
    function ResultsComponent(page, routerExtensions, quizService) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        _this.routerExtensions = routerExtensions;
        _this.quizService = quizService;
        // sobreescribimos el "Back" para que vaya a la home en lugar de al quiz.
        // el día que desde el quiz podamos venir aquí con replaceUrl: true, esto ya no será necesario
        var backHandler = _this.goHome.bind(_this);
        page.on('loaded', function () {
            platform_1.isAndroid && application.android.on(application_1.AndroidApplication.activityBackPressedEvent, backHandler);
        });
        page.on('unloaded', function () {
            platform_1.isAndroid && application.android.off(application_1.AndroidApplication.activityBackPressedEvent, backHandler);
        });
        return _this;
    }
    ResultsComponent.prototype.goHome = function (data) {
        data && (data.cancel = true);
        this.routerExtensions.navigate(['/home'], { clearHistory: true });
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'results',
            moduleId: module.id,
            styleUrls: ['./results.component.css'],
            templateUrl: './results.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            quiz_service_1.QuizService])
    ], ResultsComponent);
    return ResultsComponent;
}(base_component_1.BaseComponent));
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyQ0FBc0Y7QUFDdEYscUNBQXFDO0FBQ3JDLHlDQUEyQztBQUMzQyxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELDJEQUF5RDtBQUN6RCxnRUFBOEQ7QUFTOUQ7SUFBc0Msb0NBQWE7SUFDL0MsMEJBQ2MsSUFBVSxFQUNWLGdCQUFrQyxFQUNyQyxXQUF3QjtRQUhuQyxZQUtJLGtCQUFNLElBQUksQ0FBQyxTQVVkO1FBZGEsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDckMsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFHL0IseUVBQXlFO1FBQ3pFLDhGQUE4RjtRQUM5RixJQUFJLFdBQVcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNkLG9CQUFTLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsd0JBQXdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEcsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNoQixvQkFBUyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ25HLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sSUFBeUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBckJRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FJc0IsV0FBSTtZQUNRLHlCQUFnQjtZQUN4QiwwQkFBVztPQUoxQixnQkFBZ0IsQ0FzQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRCRCxDQUFzQyw4QkFBYSxHQXNCbEQ7QUF0QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWl6U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9xdWl6LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Jlc3VsdHMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogWycuL3Jlc3VsdHMuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHVibGljIHF1aXpTZXJ2aWNlOiBRdWl6U2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocGFnZSk7XHJcbiAgICAgICAgLy8gc29icmVlc2NyaWJpbW9zIGVsIFwiQmFja1wiIHBhcmEgcXVlIHZheWEgYSBsYSBob21lIGVuIGx1Z2FyIGRlIGFsIHF1aXouXHJcbiAgICAgICAgLy8gZWwgZMOtYSBxdWUgZGVzZGUgZWwgcXVpeiBwb2RhbW9zIHZlbmlyIGFxdcOtIGNvbiByZXBsYWNlVXJsOiB0cnVlLCBlc3RvIHlhIG5vIHNlcsOhIG5lY2VzYXJpb1xyXG4gICAgICAgIGxldCBiYWNrSGFuZGxlciA9IHRoaXMuZ29Ib21lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgcGFnZS5vbignbG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0FuZHJvaWQgJiYgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBiYWNrSGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFnZS5vbigndW5sb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzQW5kcm9pZCAmJiBhcHBsaWNhdGlvbi5hbmRyb2lkLm9mZihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBiYWNrSGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ib21lKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgZGF0YSAmJiAoZGF0YS5jYW5jZWwgPSB0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxufSJdfQ==