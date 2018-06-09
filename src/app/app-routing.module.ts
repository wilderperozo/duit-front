import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'admin',
		pathMatch: 'full'
	},
	{path: 'admin', component: AdminComponent, data: { title: 'Duit Admin' }},
	// { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
