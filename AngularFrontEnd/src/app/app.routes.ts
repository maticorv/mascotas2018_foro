import { Injectable, ModuleWithProviders } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { MascotaComponent } from "./mascota/mascota.component";
import { NuevaMascotaComponent } from "./mascota/nueva-mascota.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { RegistrarUsuarioComponent } from "./usuario/registrar-usuario.component";
import { UsuarioService } from "./usuario/usuario.service";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ForoMascotasComponent } from "./foro-mascotas/foro-mascotas.component";
import { NuevoTemaComponent } from "./foro-mascotas/nuevo-tema.component";
import { ForoService } from "./foro-mascotas/foro.service";
import { TemaPostComponent } from "./foro-mascotas/tema-post/tema-post.component";
import { NuevoPostComponent } from "./foro-mascotas/tema-post/nuevo-post/nuevo-post.component";
import { PostViewComponent } from "./foro-mascotas/tema-post/post-view.component";
import { UserPostsComponent } from "./foro-mascotas/tema-post/user-posts/user-posts.component";

@Injectable()
export class LoggedIn implements CanActivate {
    constructor(private router: Router, private auth: UsuarioService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.auth.usuarioLogueado) {
            return true;
        } else {
            this.router.navigate(["/"]);
            return false;
        }
    }
}

/*
VERIFICA SI ES ADMINISTRADOR
*/
@Injectable()
export class IsAdmin implements CanActivate {
    constructor(private router: Router, private auth: UsuarioService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.auth.usuarioLogueado);
        if (this.auth.usuarioLogueado.rol[1] == "admin") return true ;
        else {
            this.router.navigate(["/"]);
            return false;
        }
    }

}

// Route Configuration
export const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "perfilUsuario", component: PerfilComponent, canActivate: [LoggedIn] },
    { path: "registrarUsuario", component: RegistrarUsuarioComponent },
    { path: "mascotas", component: MascotaComponent, canActivate: [LoggedIn] },
    { path: "nuevaMascota/:id", component: NuevaMascotaComponent, canActivate: [LoggedIn] },
    { path: "nuevaMascota", component: NuevaMascotaComponent, canActivate: [LoggedIn] },
    { path: "foros", component: ForoMascotasComponent},
    { path: "foros/nuevotema", component: NuevoTemaComponent, canActivate: [LoggedIn] },
    { path: "foros/:id/posts", component: TemaPostComponent},
    { path: "foros/:id/posts/nuevopost", component: NuevoPostComponent, canActivate: [LoggedIn]},
    { path: "foros/:id/:postid", component: PostViewComponent},
    { path: "perfilUsuario/posts/:userid", component: UserPostsComponent, canActivate: [LoggedIn] },
    { path: "perfilUsuario/posts/:userid/:postid/edit", component: NuevoPostComponent, canActivate: [LoggedIn]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
