import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { SvgIconComponent } from "@ngneat/svg-icon";

import { ChipComponent } from "@shared/components/chip/chip.component";

import { ButtonComponent } from "./components/button/button.component";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { DropdownMenuComponent } from "./components/dropdown-menu/dropdown-menu.component";

const Dependencies = [SvgIconComponent, NgOptimizedImage];

const Components = [ButtonComponent, DropdownMenuComponent, DrawerComponent, ChipComponent];

@NgModule({
	imports: [CommonModule, ...Dependencies],
	declarations: Components,
	exports: [...Components, ...Dependencies],
})
export class SharedModule {}
