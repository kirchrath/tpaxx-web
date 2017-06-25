import {NgModule} from "@angular/core";
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdSelectModule,
    ],
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdSelectModule,
    ],
})
export class MaterialModule { }
