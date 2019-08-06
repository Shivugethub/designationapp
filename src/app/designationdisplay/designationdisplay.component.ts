import { Component, OnInit } from '@angular/core';
import { Designation } from './designation';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({

  selector: 'app-designationdisplay',
  templateUrl: './designationdisplay.component.html',
  styleUrls: ['./designationdisplay.component.css']
})
export class DesignationdisplayComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
name:string = '';
msg = 'onDesigDelete';
description:string = '';
arrDesig: Designation[ ] = [
  new Designation('Software','Role'),
  new Designation('Data Base AdminiStator','Handle the backend DB ports configauration'),
  new Designation('Software', 'Test the Application/project in all possible ways using agile methodolgy')
];
  ngOnInit() {
  }



  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onDesigDelete(desig) {
    confirm(this.msg);
    this.arrDesig.splice(this.arrDesig.indexOf(desig), 1);
  }


}
