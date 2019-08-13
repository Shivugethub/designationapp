import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Designation } from './designation';

@Injectable({
  providedIn: 'root'
})
export class DataService  implements InMemoryDbService {

  constructor() { }
  createDb() {

   let  desig: Designation[] = [
      {
        Id: '1',
        Designation: "Proofer",
        Description: "Proofer"
      }
    ];
   return {desig};

  }
}

