import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AuthValidGuard } from '../providers/auth-valid.guard';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'admin',
		pathMatch: 'full'
	},
	{
		path: 'admin',
		component: AdminComponent,
		data: { title: 'Duit Admin' },
		canActivate: [AuthValidGuard],
		children: [{ path: 'profiles', component: ProfilesComponent, data: { title: 'Profiles' } }]
	}
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AdminRouteModule {}
