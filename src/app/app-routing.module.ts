import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilesComponent } from './admin/profiles/profiles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'auth',
		pathMatch: 'full'
	},
	{ path: 'admin', component: AdminComponent, data: { title: 'Duit Admin' } },
	{ path: 'auth', component: AuthComponent, data: { title: 'Auth' } },
	{ path: 'profiles', component: ProfilesComponent, data: { title: 'Profiles' } }
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
