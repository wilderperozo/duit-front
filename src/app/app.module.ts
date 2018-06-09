
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { AdminModule } from './admin/admin.module';




@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
		NgbModule.forRoot(),
		AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
