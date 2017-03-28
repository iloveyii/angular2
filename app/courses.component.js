System.register(['angular2/core', "./courses.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(coursesService) {
                    this.title = "The title of courses page";
                    this.courses = coursesService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n    <h2>Courses</h2>\n    {{ title }}\n    <ul>\n        <li *ngFor=\"#course of courses\">\n            {{ course }}\n        </li>\n    </ul>\n    ",
                        providers: [courses_service_1.CoursesService]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService])
                ], CoursesComponent);
                return CoursesComponent;
            })();
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map