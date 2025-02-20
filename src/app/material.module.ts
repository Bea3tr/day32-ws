import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
const MATERIAL = [ MatButtonModule, MatInputModule, MatFormFieldModule, 
  MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTableModule ];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL
})
export class MaterialModule { }
