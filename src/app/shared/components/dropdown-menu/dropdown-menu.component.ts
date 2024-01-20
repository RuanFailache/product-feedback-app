import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { DropdownItem } from "@shared/models/dropdown-item";

@Component({
	selector: "app-dropdown-menu",
	templateUrl: "./dropdown-menu.component.html",
	styleUrl: "./dropdown-menu.component.sass",
})
export class DropdownMenuComponent<T> implements OnInit {
	@Input({ required: true }) options: DropdownItem<T>[];
	@Input() label: string = "";
	@Input() placeholder: string = "";
	@Input() value: T;

	@Output() selectOption = new EventEmitter<T>();

	isActive = false;
	selectedOption: DropdownItem<T>;

	get selectedOptionText(): string {
		return this.selectedOption?.label || this.placeholder;
	}

	ngOnInit() {
		if (this.value) {
			this.options.forEach((option) => {
				if (this.value === option.value) this.selectedOption = option;
			});
		}
	}

	onToggle() {
		this.isActive = !this.isActive;
	}

	onSelectOption(option: DropdownItem<T>): void {
		this.selectedOption = option;
		this.selectOption.emit(option.value);
		this.onToggle();
	}
}
