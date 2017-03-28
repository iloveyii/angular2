System.register([], function(exports_1) {
    var CoursesService;
    return {
        setters:[],
        execute: function() {
            CoursesService = (function () {
                function CoursesService() {
                }
                CoursesService.prototype.getCourses = function () {
                    return ["Course1", "Course2", "Course3"];
                };
                return CoursesService;
            })();
            exports_1("CoursesService", CoursesService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map