System.register(['angular2/core', './authors.service'], function(exports_1) {
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
    var core_1, authors_service_1;
    var AuthorsCompnonent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            }],
        execute: function() {
            AuthorsCompnonent = (function () {
                function AuthorsCompnonent(authorsService) {
                    this.title = 'The title of the authors page';
                    this.authors = authorsService.getAuthors();
                }
                AuthorsCompnonent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n    <h2>Authors</h2>\n    {{ title }}\n    <ul>\n        <li *ngFor=\"#author of authors\">\n            {{ author }}\n        </li>\n    </ul>\n    ",
                        providers: [authors_service_1.AuthorsService]
                    }), 
                    __metadata('design:paramtypes', [authors_service_1.AuthorsService])
                ], AuthorsCompnonent);
                return AuthorsCompnonent;
            })();
            exports_1("AuthorsCompnonent", AuthorsCompnonent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map