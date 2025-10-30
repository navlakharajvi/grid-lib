import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component } from '@angular/core';

class Grid {
    constructor() { }
    ngOnInit() {
        console.log("My Comp works!");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: Grid, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.7", type: Grid, isStandalone: true, selector: "lib-grid", ngImport: i0, template: "<p>grid works!</p>\nHi", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: Grid, decorators: [{
            type: Component,
            args: [{ selector: 'lib-grid', imports: [CommonModule], standalone: true, template: "<p>grid works!</p>\nHi" }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of grid-lib
 */
// export * from './lib/grid-lib';

/**
 * Generated bundle index. Do not edit.
 */

export { Grid };
//# sourceMappingURL=grid-lib.mjs.map
