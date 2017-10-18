"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ALL_QUESTIONS = require("../resources/questions.json");
var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.questions = Array.prototype.slice.apply(ALL_QUESTIONS);
        this.sectionTitles = this.questions
            .map(function (q) { return q.sectionTitle; })
            .filter(function (str, index, self) { return index === self.indexOf(str); }); // remove repeated
    }
    QuestionService.prototype.getTotalQuestions = function () {
        return this.questions.length;
    };
    QuestionService.prototype.getSectionTitles = function () {
        return this.sectionTitles;
    };
    QuestionService.prototype.getRandomQuestions = function (howMany, sectionTitles) {
        var list;
        list = this.questions.filter(function (q) { return sectionTitles.indexOf(q.sectionTitle) >= 0; }); // filter by section title
        list = list.sort(function () { return 0.5 - Math.random(); }); // shuffle
        return list.slice(0, howMany); // choose N first
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0MsMkRBQTZEO0FBRzdEO0lBS0k7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTO2FBQ1YsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksRUFBZCxDQUFjLENBQUM7YUFDeEIsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUssT0FBQSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO0lBQzFHLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVELDBDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLGFBQXVCO1FBQ3ZELElBQUksSUFBZ0IsQ0FBQztRQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtRQUN6RyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7SUFDcEQsQ0FBQztJQXpCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTJCM0I7SUFBRCxzQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uL2RhdGEvcXVlc3Rpb24nO1xyXG5cclxuaW1wb3J0ICogYXMgQUxMX1FVRVNUSU9OUyBmcm9tICcuLi9yZXNvdXJjZXMvcXVlc3Rpb25zLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBzZWN0aW9uVGl0bGVzOiBzdHJpbmdbXTtcclxuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShBTExfUVVFU1RJT05TKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25UaXRsZXMgPSB0aGlzLnF1ZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocSA9PiBxLnNlY3Rpb25UaXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChzdHIsIGluZGV4LCBzZWxmKSA9PiBpbmRleCA9PT0gc2VsZi5pbmRleE9mKHN0cikpOyAvLyByZW1vdmUgcmVwZWF0ZWRcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VG90YWxRdWVzdGlvbnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3Rpb25UaXRsZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlY3Rpb25UaXRsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tUXVlc3Rpb25zKGhvd01hbnk6IG51bWJlciwgc2VjdGlvblRpdGxlczogc3RyaW5nW10pOiBRdWVzdGlvbltdIHtcclxuICAgICAgICBsZXQgbGlzdDogUXVlc3Rpb25bXTtcclxuICAgICAgICBsaXN0ID0gdGhpcy5xdWVzdGlvbnMuZmlsdGVyKHEgPT4gc2VjdGlvblRpdGxlcy5pbmRleE9mKHEuc2VjdGlvblRpdGxlKSA+PSAwKTsgLy8gZmlsdGVyIGJ5IHNlY3Rpb24gdGl0bGVcclxuICAgICAgICBsaXN0ID0gbGlzdC5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpOyAvLyBzaHVmZmxlXHJcbiAgICAgICAgcmV0dXJuIGxpc3Quc2xpY2UoMCwgaG93TWFueSk7IC8vIGNob29zZSBOIGZpcnN0XHJcbiAgICB9XHJcblxyXG59Il19