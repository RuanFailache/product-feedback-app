import { Component, Input } from "@angular/core";

import { RoadmapListItem } from "@modules/feedback/models/roadmap-list-item";

@Component({
	selector: "app-roadmap-card",
	templateUrl: "./roadmap-card.component.html",
	styleUrl: "./roadmap-card.component.sass",
})
export class RoadmapCardComponent {
	@Input({ required: true }) statusList: RoadmapListItem[];
}
