import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEigenDirective]'
})
export class EigenDirectiveDirective {


  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
    { }
  }


  @Input() set appEigenDirective(condition: boolean) {
      if (condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);

      } else {
        this.viewContainer.clear();
      }
  }

}
