import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SvgIconComponent } from "@ngneat/svg-icon";

import { ButtonComponent } from "./components/button/button.component";
import { DropdownMenuComponent } from "./components/dropdown-menu/dropdown-menu.component";

@NgModule({
	imports: [CommonModule, SvgIconComponent],
	declarations: [ButtonComponent, DropdownMenuComponent],
	exports: [ButtonComponent, DropdownMenuComponent, SvgIconComponent],
})
export class SharedModule {}
