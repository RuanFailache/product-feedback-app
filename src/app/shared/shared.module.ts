import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonComponent } from "./components/button/button.component";
import { DropdownMenuComponent } from "./components/dropdown-menu/dropdown-menu.component";

@NgModule({
	imports: [CommonModule],
	declarations: [ButtonComponent, DropdownMenuComponent],
	exports: [ButtonComponent, DropdownMenuComponent],
})
export class SharedModule {}
