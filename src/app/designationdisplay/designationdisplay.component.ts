import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/designation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DesignationdataService } from '../designationdata.service';
// import { jquery } from 'jquery-confirm';
// import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-designationdisplay',
  templateUrl: './designationdisplay.component.html',
  styleUrls: ['./designationdisplay.component.css']
})
export class DesignationdisplayComponent implements OnInit {

  title = 'Designation';
  closeResult: string;
  id:number;
  designation: string = '';
  msg = 'Are You Sure!';
  description: string = '';

  //  using api
  constructor(private modalService: NgbModal, private dataservice: DesignationdataService) {}
  errorMessage = '' ;
  editDesignation: Designation[];
  arrdesignation: Designation[] = [] ;
  // End api

  ngOnInit() {
    this.getDesignations();
  }

  getDesignations() {
    this.dataservice.getDesignations().subscribe((data: any[]) => {
      console.log(data);
      this.arrdesignation = data;
    });
  }

  public onDesigDelete(arrKey: Designation) {
    console.log(arrKey);
    if (confirm(this.msg) === true) {
      this.dataservice.deleteDesignation(arrKey.Designation).subscribe((ret: any) => {
        console.log('Successfuly deleted: ', ret);
        let deletedData = this.arrdesignation.splice(this.arrdesignation.indexOf(arrKey), 1);
        alert('Deleted Designaton:' + "'" + deletedData[0].Designation + "'" + '  Description:' + "'" + deletedData[0].Description + "'");

        // jquery-confirm
        //   $.alert({
        //     title: 'Alert!',
        //     content: 'Simple alert!',
        // });
      });
    }
  }

 // Modal Editpopup
  openEdit(content, item) {
    this.id = item.Id;
    console.log(this.id);
    this.designation = item.Designation;
    this.description = item.Description;
    this.modalService.open(content);
  }

 // Modal Addpopup
  open(content) {
    this.id = null;
    this.designation = '';
    this.description = '';
    this.modalService.open(content);
  }


  // Insert and update code here
  public designationForm(f) {
    if (this.id != null) {
      console.log('Update');
      this.dataservice.editDesignation(this.id, f.value).subscribe((data: any) => {
        alert('Record Updated');
      });
    } else {
      console.log('Adding');
      this.dataservice.addDesignation(f.value).subscribe((data: any) => {
      alert('Record Added'); },
      function(error) {
        console.log(error);
      },
      function() {}
      );
    }
    this.modalService.dismissAll();
  }
}
