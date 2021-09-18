import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { StoreModule } from '@ngrx/store';
import { OpenPrototypeDialogComponent } from './open-prototype-dialog/open-prototype-dialog.component';
import { CreatePrototypeDialogComponent } from './create-prototype-dialog/create-prototype-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from './components/components.module';
import { ComponentFinderComponent } from './component-finder/component-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePrototypeDialogComponent,
    OpenPrototypeDialogComponent,
    ComponentFinderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoRootModule,
    StoreModule.forRoot({}, {}),
    FormsModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
