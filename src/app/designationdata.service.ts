import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map  } from 'rxjs/operators';
import { Designation } from './designation';
// import { DegnationData } from './api.service';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { post } from 'selenium-webdriver/http';
//

@Injectable({
  providedIn: 'root'
})
export class DesignationdataService {

  constructor(private http: HttpClient) { }

  // private mobUrl = 'api/desig';
    SERVER_URL: string = 'http://localhost:4200/api/desig/';

    //  strartl

    public getDesignations() {
      return this.http.get(this.SERVER_URL);
    }

    public getDesignationById(id) {
      return this.http.get(this.SERVER_URL + id);
    }

    public deleteDesignation(designationID) {
      // let head = new HttpHeaders().set("Content-Type", "application/json");
      console.log('how it is getting ID?:' + designationID);
      // console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
      return this.http.delete(this.SERVER_URL + designationID);
    }

    public addDesignation(f) {
      console.log(f);
      console.log(JSON.stringify(f));
      let body = JSON.stringify(f);
      let head = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.post(this.SERVER_URL, body, {headers: head});
  }


  editDesignation(Id, item) {
    console.log(Id);
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.SERVER_URL + Id, body, { headers: head });
  }


    // end


  // getDesignations(): Observable<Designation[]> {
  //   return this.http.get<Designation[]>(this.mobUrl).pipe(
  //     tap(data => console.log(data)),
  //     catchError(this.handleError)
  //   );
  // }

  // getDesignation(id: number): Observable<Designation> {
  //   const url = `${this.mobUrl}/${id}`;
  //   return this.http.get<Designation>(url).pipe(
  //   catchError(this.handleError)
  //   );
  //   }

    // updateDesignation(desig: Designation): Observable<Designation> {
    //   const url = `${this.mobUrl}/${desig.Id}`;
    //   return this.http.put<Designation>(this.mobUrl, desig).pipe(
    //     map(() => desig),
    //     catchError(this.handleError)
    //   );
    // }



  //   addDesignation(desig: Designation): Observable<Designation> {
  //     desig.Id = null;
  //     console.log(desig);
  //     let body= JSON.stringify(desig);
  //     let head = new HttpHeaders().set("Content-Type", "application/json");
  //     return this.http.post<Designation>(this.SERVER_URL,body,{headers:head}).pipe(
  //       tap(data => console.log(data))
  //     );
  // }


  // delete using api
  // onDesigDelete(id: number): Observable<Designation> {
  //   // if (confirm(this.msg) === true) {

  //   // }
  //   const url = `${this.mobUrl}/${id}`;
  //   return this.http.delete<Designation>(url, this.httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // end



  // private handleError(err) {
  //   let errorMessage: string;
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An Error Occured : ${err.error.message}`;
  //   } else {
  //     errorMessage = `Server Returned Code : ${err.status} : ${err.body.error} `;
  //   }

  //   console.error(err);
  //   return throwError(errorMessage);
  // }

}
