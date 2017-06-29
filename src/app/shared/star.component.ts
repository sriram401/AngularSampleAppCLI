import { Component,OnChanges,Input, Output,EventEmitter } from "@angular/core";

@Component(
    {
        selector : 'ai-star',
        templateUrl : 'star.component.html',
        styleUrls : ['star.component.css'],
        moduleId : module.id
    }
)

export class StarComponent implements OnChanges
{
    @Input() rating : number = 4;
    starWidth : number;

    ngOnChanges()
    {
        this.starWidth = this.rating * 86/5;
    }

    @Output() notify : EventEmitter<string> = new EventEmitter<string>();

    onClick()
    {
        this.notify.emit(`The rating ${this.rating} clicked!`);
    }
}
