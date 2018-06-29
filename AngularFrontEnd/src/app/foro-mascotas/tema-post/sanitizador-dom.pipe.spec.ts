import { SanitizadorDomPipe } from "./sanitizador-dom.pipe";
import { DomSanitizer } from "@angular/platform-browser";

describe("SanitizadorDomPipe", () => {
  it("create an instance", () => {
    // tslint:disable-next-line:no-null-keyword
    const pipe = new SanitizadorDomPipe(null);
    expect(pipe).toBeTruthy();
  });
});
