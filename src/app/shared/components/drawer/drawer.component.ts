import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-drawer",
	templateUrl: "./drawer.component.html",
	styleUrl: "./drawer.component.sass",
})
export class DrawerComponent {
	@Input({ required: true }) isActive: boolean;

	@Output() closeDrawer = new EventEmitter<never>();

	onCloseDrawer() {
		this.closeDrawer.emit();
	}
}
