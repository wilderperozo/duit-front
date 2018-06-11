import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfilesComponent, ProfileTableComponent, ProfileHeaderComponent]
})
export class ProfilesModule { }
