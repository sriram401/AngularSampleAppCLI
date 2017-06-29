import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule(
    {
        imports : [
            CommonModule
        ],
        exports : [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            StarComponent,
            BrowserAnimationsModule
        ],
        declarations : [
            StarComponent
        ]

    }
)
export class SharedModule{

}
