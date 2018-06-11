import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [AuthComponent],
	exports: [AuthComponent]
})
export class AuthModule {}
