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
        Id: 1,
        Designation: "Software Engineer",
        Description: "Software Engineer"
      },
      {
        Id: 2,
        Designation: "Sr. Software Engineer",
        Description: "Senior Software Engineer"
      },
      {
        Id: 3,
        Designation: "Software Developer",
        Description: "Software Developer"
      },
      {
        Id: 4,
        Designation: "Software Engineer",
        Description: "Software Engineer"
      },
      {
        Id: 5,
        Designation: "Jr. Software Engineer",
        Description: "Junior Software Engineer"
      },
      {
        Id: 6,
        Designation: "Software Engineer",
        Description: "Software Engineer"
      },
      {
        Id: 7,
        Designation: "System Administrator",
        Description: "System Administrator"
      },
      {
        Id: 8,
        Designation: "Process Manager",
        Description: "Software Engineer"
      },
      {
        Id: 9,
        Designation: "System Administrator",
        Description: "System Administrator"
      },
      {
        Id: 10,
        Designation: "Proofer",
        Description: "Proofer"
      }
    ];
   return {desig};

  }
}

