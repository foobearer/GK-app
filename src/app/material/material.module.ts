import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import {CdkTableModule} from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTreeModule,
    CdkTableModule,
    CdkTreeModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTreeModule,
    CdkTableModule,
    CdkTreeModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
