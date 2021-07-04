import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Itemconfig } from 'src/models/itemconfig';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item : Itemconfig;
  availableTypes : string[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    console.log("in edit item",this.data.item)
    this.item = this.data.item;
    this.availableTypes = ["Electronic","Automobile","Clothing","Kitchen","Books"];
  }

  editItem() {
    this.item.updateby = JSON.parse(sessionStorage.getItem('userdetails')).username;
    this.item.updatedon = new Date();
    // Service call
    //this.service.save(this.item).subscribe(res => {
    //   if(res) {
    //     this.dialogRef.close(res);
    //   }
    // }, err => {
    //   this.messageService.error(err,"Shop Bridge");
    // })

    this.dialogRef.close(this.item);
  }

  close() {
    this.dialogRef.close();
  }

}
