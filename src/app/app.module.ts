import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { IotComponent } from './iot/iot.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Table2Component } from './table2/table2.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatRadioModule} from '@angular/material/radio';

import { DeviceService } from './iot/device.service';
import { PasswordValidatorDirective } from './template-driven-forms/password-validator.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const appRoutes: Routes = [
  {path: 'first-page' , component: FirstPageComponent},
  {path: 'second-page' , component: SecondPageComponent},
  {path: 'third-page' , component: ThirdPageComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'table' , component: TableComponent},
  {path: 'table2' , component: Table2Component},
  {path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  {path: 'reative-form', component: ReactiveFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    IotComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    TableComponent,
    DashboardComponent,
    Table2Component,
    TemplateDrivenFormsComponent,
    PasswordValidatorDirective,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    HttpClientModule,
    MatRadioModule
  ],
  exports: [
    BrowserModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
