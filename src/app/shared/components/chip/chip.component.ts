import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-chip",
	templateUrl: "./chip.component.html",
	styleUrl: "./chip.component.sass",
})
export class ChipComponent {
	@Input() isActive: boolean;

	@Output() toggle = new EventEmitter<never>();

	onClick() {
		this.toggle.emit();
	}
}
