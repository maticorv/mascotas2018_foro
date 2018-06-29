import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "sanitizadorDom"
})
export class SanitizadorDomPipe implements PipeTransform {
  constructor(  private domSanitizer: DomSanitizer) {
  }

  transform(html: string, args?: any): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
