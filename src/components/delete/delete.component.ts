import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Itemconfig } from 'src/models/itemconfig';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  item : Itemconfig;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.item = this.data.item;
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    if(this.data.title="Item") {
      //Service call to delete that particualr item and then send the response of the smae item

      // Manually setting isdeleted value to true as there is no api or service call
      this.item.isdeleted = true;
      this.dialogRef.close(this.item)
    }
  }
}
