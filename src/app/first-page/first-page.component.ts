import { Component, OnInit, Input } from '@angular/core';
import { TableDataSource } from '../table/table-datasource';
import { DeviceService } from '../iot/device.service';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { catchError, map, startWith, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class DeviceId {
  id: string;
}

const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
/*
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
*/
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(f) {
    console.log(f.value.loginId);
  }
}
