import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGaurd } from './guard/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {path: '',component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGaurd] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGaurd] },
    { path: "**", component: NotFoundComponent}

];

export const routing = RouterModule.forRoot(appRoutes);