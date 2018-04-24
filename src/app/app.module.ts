import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { ToDoDialogComponent } from './to-do/to-do-dialog/to-do-dialog.component';

import { ToDoService } from './to-do/shared/to-do.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent,
    ToDoDialogComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [ ToDoDialogComponent ],
  providers: [ ToDoService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-US'},
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
