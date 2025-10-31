import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component } from '@angular/core';
import moment from 'moment';

class Grid {
    name = '';
    message = '';
    constructor() { }
    ngOnInit() {
        console.log("My Comp works!");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Grid, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.9", type: Grid, isStandalone: true, selector: "lib-grid", inputs: { name: "name", message: "message" }, ngImport: i0, template: "Hi, {{name}} - {{message}}", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Grid, decorators: [{
            type: Component,
            args: [{ selector: 'lib-grid', imports: [CommonModule], standalone: true, template: "Hi, {{name}} - {{message}}" }]
        }], ctorParameters: () => [], propDecorators: { name: [{
                type: Input
            }], message: [{
                type: Input
            }] } });

class Grid2 {
    ngOnInit() {
        console.log("Today", moment().utc().format());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Grid2, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.9", type: Grid2, isStandalone: true, selector: "lib-grid-2", ngImport: i0, template: "<p>grid-2 works!</p>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Grid2, decorators: [{
            type: Component,
            args: [{ selector: 'lib-grid-2', imports: [], template: "<p>grid-2 works!</p>\n" }]
        }] });

/*
 * Public API Surface of grid-lib
 */
// export * from './lib/grid-lib';

/**
 * Generated bundle index. Do not edit.
 */

export { Grid, Grid2 };
//# sourceMappingURL=grid-lib.mjs.map
