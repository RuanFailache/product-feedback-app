import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
	selector: "[appClickOutside]",
})
export class ClickOutsideDirective {
	@Output() appClickOutside = new EventEmitter<void>();

	constructor(private elementRef: ElementRef) {}

	@HostListener("document:click", ["$event"])
	onDocumentClick(event: PointerEvent) {
		const nativeElement: HTMLElement = this.elementRef.nativeElement;
		const clickedInside: boolean = nativeElement.contains(event.target as HTMLElement);
		if (!clickedInside) this.appClickOutside.emit();
	}
}
