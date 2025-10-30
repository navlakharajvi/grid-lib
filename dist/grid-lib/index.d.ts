import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';

declare class Grid implements OnInit {
    name: string;
    message: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Grid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Grid, "lib-grid", never, { "name": { "alias": "name"; "required": false; }; "message": { "alias": "message"; "required": false; }; }, {}, never, never, true, never>;
}

declare class Grid2 {
    static ɵfac: i0.ɵɵFactoryDeclaration<Grid2, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Grid2, "lib-grid-2", never, {}, {}, never, never, true, never>;
}

export { Grid, Grid2 };
