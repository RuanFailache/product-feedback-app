import { Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from "@angular/core";

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

	#selectedOption: WritableSignal<DropdownItem<T> | null> = signal(null);

	#isActive: WritableSignal<boolean> = signal(false);

	get selectedOption() {
		return this.#selectedOption();
	}

	get isActive() {
		return this.#isActive();
	}

	get selectedOptionText(): string {
		return this.selectedOption?.label || this.placeholder;
	}

	ngOnInit() {
		if (this.value) {
			this.options.forEach((option) => {
				if (this.value === option.value) this.#selectedOption.set(option);
			});
		}
	}

	onToggle() {
		this.#isActive.update((value) => !value);
	}

	onSelectOption(option: DropdownItem<T>): void {
		this.#selectedOption.set(option);
		this.selectOption.emit(option.value);
		this.onToggle();
	}

	onClickOutside() {
		if (this.isActive) this.#isActive.set(false);
	}
}
