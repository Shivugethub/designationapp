import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/designation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DesignationdataService } from '../designationdata.service';
import { ToastService } from '../toast.service';
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
  constructor(private modalService: NgbModal, private dataservice: DesignationdataService, private toastService: ToastService) {}
  errorMessage = '' ;
  editDesignation: Designation[];
  arrdesignation: Designation[] = [];
  storeDesignation: Designation[] = [];
  // End api

  ngOnInit() {
    this.getDesignations();
  }

  getDesignations() {
    this.dataservice.getDesignations().subscribe((data: any[]) => {
      console.log(data);
      this.arrdesignation = data;
      this.storeDesignation = [...data];
    });
  }

  public onDesigDelete(arrKey: Designation) {
    console.log(arrKey);
    if (confirm(this.msg) === true) {
      this.dataservice.deleteDesignation(arrKey.Designation).subscribe((ret: any) => {
        console.log('Successfuly deleted: ', ret);
        let deletedData = this.arrdesignation.splice(this.arrdesignation.indexOf(arrKey), 1);
        this.toastService.show(`Deleted: ${deletedData[0].Designation}`, { classname: 'bg-danger text-light', delay: 150 });
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

  onSearch(searchTerm: HTMLButtonElement) {
    this.arrdesignation = searchTerm.value ? this.storeDesignation.filter((desgn : Designation) => desgn.Designation.toLowerCase().includes(searchTerm.value.toLowerCase())) : 
     this.storeDesignation;
  }


  addNewDesg() {
    const id = Math.random().toString();
    const newDesgn = {Id: id, Designation:this.designation, Description: this.description };
    this.arrdesignation.push(newDesgn);
    this.storeDesignation.push(newDesgn);
    console.table(this.arrdesignation);
    this.toastService.show('Designation Added');
  }

  updateDesg() {
    const desgnObj = this.arrdesignation.find(item => item.Id == this.id.toString());
    const itemIndex = this.arrdesignation.findIndex(item => item.Id == this.id.toString());
    this.toastService.show('Designation Updated', { classname: 'bg-success text-light', delay: 100 });
    this.arrdesignation[itemIndex] = { Id: this.id.toString(), Designation: this.designation, Description: this.description};
  }

  closeDialog() {
    
  }
}
