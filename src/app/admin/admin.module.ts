import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from './../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProfilesModule } from './profiles/profiles.module';
import { AdminRouteModule } from './admin-route.module';

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		SharedModule,
		NgbModule.forRoot(),
		ProfilesModule,
		AdminRouteModule
	],
	declarations: [AdminComponent]
})
export class AdminModule {}
