import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";

@NgModule(
    {
        imports : [
            CommonModule
        ],
        exports : [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            StarComponent
        ],
        declarations : [
            StarComponent
        ]

    }
)
export class SharedModule{

}
