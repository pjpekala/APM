import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from 'src/app/shared/star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      CommonModule,
      FormsModule,
      StarComponent,
  ]
})
export class SharedModule { }
