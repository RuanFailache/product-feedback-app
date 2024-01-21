import { Component, EventEmitter, Input, Output } from "@angular/core";

import { RoadmapListItem } from "@modules/feedback/models/roadmap-list-item";

@Component({
	selector: "app-side-bar",
	templateUrl: "./side-bar.component.html",
	styleUrl: "./side-bar.component.sass",
})
export class SideBarComponent {
	@Input({ required: true }) selectedTag: string;
	@Input({ required: true }) statusList: RoadmapListItem[];
	@Input({ required: true }) tags: string[];

	@Output() changeTag = new EventEmitter<string>();

	onChangeTag(tag: string) {
		this.changeTag.emit(tag);
	}
}
