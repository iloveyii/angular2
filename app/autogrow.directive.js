System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                function AutoGrowDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            })();
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//# sourceMappingURL=autogrow.directive.js.map