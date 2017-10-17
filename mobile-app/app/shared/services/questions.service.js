"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ALL_QUESTIONS = require("../resources/questions.json");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
    }
    QuestionsService.prototype.getTotalQuestions = function () {
        return rxjs_1.Observable.of(ALL_QUESTIONS['length']);
    };
    QuestionsService.prototype.getRandomQuestions = function (howMany) {
        var shuffled = Array.prototype.slice.apply(ALL_QUESTIONS);
        shuffled.sort(function () { return 0.5 - Math.random(); });
        return rxjs_1.Observable.of(shuffled.slice(0, howMany));
    };
    QuestionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFJbEMsMkRBQTZEO0FBRzdEO0lBRUk7SUFBZ0IsQ0FBQztJQUVqQiw0Q0FBaUIsR0FBakI7UUFDSSxNQUFNLENBQUMsaUJBQVUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDZDQUFrQixHQUFsQixVQUFtQixPQUFlO1FBQzlCLElBQUksUUFBUSxHQUFlLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLGlCQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQVpRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFOztPQUNBLGdCQUFnQixDQWM1QjtJQUFELHVCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uL2RhdGEvcXVlc3Rpb24nO1xyXG5cclxuaW1wb3J0ICogYXMgQUxMX1FVRVNUSU9OUyBmcm9tICcuLi9yZXNvdXJjZXMvcXVlc3Rpb25zLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIFxyXG4gICAgZ2V0VG90YWxRdWVzdGlvbnMoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihBTExfUVVFU1RJT05TWydsZW5ndGgnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tUXVlc3Rpb25zKGhvd01hbnk6IG51bWJlcik6IE9ic2VydmFibGU8UXVlc3Rpb25bXT4ge1xyXG4gICAgICAgIGxldCBzaHVmZmxlZDogUXVlc3Rpb25bXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShBTExfUVVFU1RJT05TKTtcclxuICAgICAgICBzaHVmZmxlZC5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHNodWZmbGVkLnNsaWNlKDAsIGhvd01hbnkpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=