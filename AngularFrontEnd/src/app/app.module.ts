import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgDatepickerModule } from "ng2-datepicker";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { LoggedIn, routing, IsAdmin } from "./app.routes";
import { MascotaComponent } from "./mascota/mascota.component";
import { MascotaService } from "./mascota/mascota.service";
import { NuevaMascotaComponent } from "./mascota/nueva-mascota.component";
import { MenuComponent } from "./menu/menu.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { PerfilService } from "./perfil/perfil.service";
import { ProvinciaService } from "./provincia/provincia.service";
import { FileUploadComponent } from "./tools/image.base64";
import { RegistrarUsuarioComponent } from "./usuario/registrar-usuario.component";
import { UsuarioService } from "./usuario/usuario.service";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ForoMascotasComponent } from "./foro-mascotas/foro-mascotas.component";
import { NuevoTemaComponent } from "./foro-mascotas/nuevo-tema.component";
import { ForoService } from "./foro-mascotas/foro.service";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { TemaPostComponent } from "./foro-mascotas/tema-post/tema-post.component";
import { NuevoPostComponent } from "./foro-mascotas/tema-post/nuevo-post/nuevo-post.component";
import { PostService } from "./foro-mascotas/tema-post/post.service";
import { PostViewComponent } from "./foro-mascotas/tema-post/post-view.component";
import { SanitizadorDomPipe } from "./foro-mascotas/tema-post/sanitizador-dom.pipe";
import { ComentariosComponent } from "./foro-mascotas/tema-post/comentarios/comentarios.component";
import { ComentarioService } from "./foro-mascotas/tema-post/comentarios/comentario.service";
import { UserPostsComponent } from "./foro-mascotas/tema-post/user-posts/user-posts.component";
import { UserPostsService } from "./foro-mascotas/tema-post/user-posts/user-posts.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PerfilComponent,
    MascotaComponent,
    MenuComponent,
    NuevaMascotaComponent,
    RegistrarUsuarioComponent,
    FileUploadComponent,
    ForoMascotasComponent,
    NuevoTemaComponent,
    TemaPostComponent,
    NuevoPostComponent,
    PostViewComponent,
    SanitizadorDomPipe,
    ComentariosComponent,
    UserPostsComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgDatepickerModule,
    routing
  ],
  providers: [
    UserPostsService,
    ComentarioService,
    PostService,
    ForoService,
    MascotaService,
    UsuarioService,
    ProvinciaService,
    PerfilService,
    LoggedIn,
    IsAdmin,
    /* Los providers son @Inyectable, la siguiente es una forma de definir un
     provider con un valor constante para poder inyectarlo*/
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
