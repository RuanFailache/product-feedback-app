import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-tag-list-card",
	templateUrl: "./tag-list-card.component.html",
	styleUrl: "./tag-list-card.component.sass",
})
export class TagListCardComponent {
	@Input({ required: true }) selectedTag: string;
	@Input({ required: true }) tags: string[];

	@Output() changeTag = new EventEmitter<string>();
}
