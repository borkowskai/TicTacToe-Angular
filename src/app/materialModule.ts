import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
})
export class MaterialModule {}
