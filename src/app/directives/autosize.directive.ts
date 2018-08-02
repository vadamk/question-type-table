import {
  ElementRef,
  HostListener,
  Directive,
  AfterContentChecked
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'textarea[autosize]'
})

// tslint:disable-next-line:directive-class-suffix
export class Autosize implements AfterContentChecked {

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  constructor(public element: ElementRef) { }

  ngAfterContentChecked(): void {
    this.adjust();
  }

  adjust(): void {
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height =
      this.element.nativeElement.scrollHeight + 'px';
  }
}
