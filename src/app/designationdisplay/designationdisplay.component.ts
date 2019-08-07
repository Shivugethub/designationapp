import { Component, OnInit } from '@angular/core';
import { Designation } from './designation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-designationdisplay',
  templateUrl: './designationdisplay.component.html',
  styleUrls: ['./designationdisplay.component.css']
})
export class DesignationdisplayComponent implements OnInit {
  updatedItem;

  title = 'Designation';
  closeResult: string;
  constructor(private modalService: NgbModal) {}
  name: string = '';
  msg = 'Are You Sure!';
  description: string = '';
  arrDesig: Designation[] = [
    new Designation('Software', 'Role'),
    new Designation(
      'Data Base AdminiStator',
      'Handle the backend DB ports configauration'
    ),
    new Designation(
      'Software',
      'Test the Application/project in all possible ways using agile methodolgy'
    )
  ];

  ngOnInit() {}

  // modal
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Edit modal popup
  openEdit(content, item) {
    console.log(item);
    this.name = item.name;
    this.description = item.description;
    console.log('updating');
    console.log(this.name);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  // modal
  // private getDismissReason(reason: any): string {
  // if (reason === ModalDismissReasons.ESC) {
  // return 'by pressing ESC';
  // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  // return 'by clicking on a backdrop';
  // } else {
  // return `with: ${reason}`;
  // }
  // }
  // End Edit modal popup

  // delete
  onDesigDelete(desig) {
    if (confirm(this.msg) === true) {
      this.arrDesig.splice(this.arrDesig.indexOf(desig), 1);
    }
  }

  // onAddDesig() {
  // console.log(this.name);

  // console.log(this.arrDesig);
  // }

  // Update
  onEditDesign(f) {
    console.log(f.value);
    // if (condition) {

    // }

    // this.arrDesig.push(new Designation(this.name, this.description));
  }

  // Create
  // onAddDesign(f) {

  // }

  EditItem(content, i) {
    console.log(content);
    this.name = this.arrDesig[i].name;
    this.description = this.arrDesig[i].description;
    this.updatedItem = i;

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  UpdateItem() {
    const data = this.updatedItem;
    for (let i = 0; i < this.arrDesig.length; i++) {
      if (i == data) {
        this.arrDesig[i].name = this.name;

        this.arrDesig[i].description = this.description;
      }
    }
  }
}
