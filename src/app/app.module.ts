import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

/** Providers */
import { AuthService } from './providers/auth.service';
import { OrganizationService } from './providers/organization.service';
import { BusinessService } from './providers/business.service';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastrService } from './providers/toastr.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		NgbModule.forRoot(),
		ToastModule.forRoot(),
		AdminModule,
		AuthModule,
		HttpModule
	],
	providers: [ToastOptions, AuthService, OrganizationService, BusinessService, ToastrService],
	bootstrap: [AppComponent]
})
export class AppModule {}
