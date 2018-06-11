import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

/** Providers */
import { AuthService } from './providers/auth.service';
import { OrganizationService } from './providers/organization.service';
import { BusinessService } from './providers/business.service';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProfileService } from './providers/profile.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		NgbModule.forRoot(),
		AdminModule,
		AuthModule,
		HttpModule
	],
	providers: [AuthService, OrganizationService, BusinessService, ProfileService],
	bootstrap: [AppComponent]
})
export class AppModule {}
