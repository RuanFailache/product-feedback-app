import { Component } from "@angular/core";

interface RoadmapListItem {
	color: string;
	label: string;
	amount: number;
}

@Component({
	selector: "app-side-bar",
	templateUrl: "./side-bar.component.html",
	styleUrl: "./side-bar.component.sass",
})
export class SideBarComponent {
	statusList: RoadmapListItem[] = [
		{ color: "#F49F85", label: "Planned", amount: 2 },
		{ color: "#AD1FEA", label: "In-Progress", amount: 3 },
		{ color: "#62BCFA", label: "Live", amount: 1 },
	];
}
