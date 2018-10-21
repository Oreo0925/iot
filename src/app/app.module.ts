import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { HttpClientModule} from '@angular/common/http';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IotComponent } from './iot/iot.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  {path: 'first-page' , component: FirstPageComponent},
  {path: 'second-page' , component: SecondPageComponent},
  {path: 'third-page' , component: ThirdPageComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'table' , component: TableComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    IotComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    TableComponent,
    DashboardComponent
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
    MatSortModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
