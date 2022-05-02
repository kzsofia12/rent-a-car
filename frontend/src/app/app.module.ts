import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentFormComponent } from './components/rent-form/rent-form.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { RentItemComponent } from './components/rent-item/rent-item.component';
import { RentCloseFormComponent } from './components/rent-close-form/rent-close-form.component';
import { RentCloseDialogComponent } from './components/rent-close-dialog/rent-close-dialog.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const appRoutes:Routes=[
  {path:'', component: VehiclesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'rentals', component: RentalsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiclesComponent,
    VehicleItemComponent,
    ClientsComponent,
    ClientItemComponent,
    VehicleFormComponent,
    RentFormComponent,
    RentalsComponent,
    RentItemComponent,
    RentCloseFormComponent,
    RentCloseDialogComponent,
    ClientFormComponent,
    SearchBarComponent,
  ],
  imports: [
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatTabsModule,
    MatCheckboxModule,
    MatGridListModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
