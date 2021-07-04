import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MessageService } from 'src/services/message.service';
import { DeleteComponent } from '../delete/delete.component';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, public dialog: MatDialog, private router: Router,
    private messageService: MessageService) { }
  slides = [
    { 'image': '../assets/images/electronic.jpg' },
    { 'image': '../assets/images/travel.jpg' },
    { 'image': '../assets/images/clothing.jpg' },
    { 'image': '../assets/images/kitchen.jpg' },
    { 'image': '../assets/images/books.jpg' },
  ];
  homePageContent = [
    { 'image': '../assets/images/electronic.jpg', "description": "Electronic Devices", "type": "Electronic", "name": "DVD players", "price": 234, "discount": 12 },
    { 'image': '../assets/images/travel.jpg', "description": "Automobiles are also available.", "type": "Automobile", "name": "Car", "price": 56, "discount": 0 },
    { 'image': '../assets/images/electronic.jpg', "description": "Electronic Devices", "type": "Electronic", "name": "iPads", "price": 78968, "discount": 42 },
    { 'image': '../assets/images/travel.jpg', "description": "Automobiles are also available.", "type": "Automobile", "name": "TRUCK", "price": 245, "discount": 4 },
    { 'image': '../assets/images/electronic.jpg', "description": "Electronic Devices", "type": "Electronic", "name": "Mobiles", "price": 769, "discount": 20 },
    { 'image': '../assets/images/clothing.jpg', "description": "Fashion accessories","type": "Clothing","name": "Dresses", "price": 412, "discount": 8 },
    { 'image': '../assets/images/kitchen.jpg', "description": "Kitchen Appliances", "type": "Kitchen", "name": "Dish Washer", "price": 674, "discount": 5 },
    { 'image': '../assets/images/clothing.jpg', "description": "Fashion accessories", "type": "Clothing", "name": "Fashion Items", "price": 68, "discount": 10 },
    { 'image': '../assets/images/books.jpg', "description": "Books related to all Categories", "type": "Books", "name": "Fiction Book", "price": 906, "discount": 9 },
    { 'image': '../assets/images/kitchen.jpg', "description": "Kitchen Appliances", "type": "Kitchen", "name": "Induction Stove", "price": 242, "discount": 7 },
    { 'image': '../assets/images/books.jpg', "description": "Books related to all Categories", "type": "Books", "name": "Thriller", "price": 356, "discount": 21 },
    { 'image': '../assets/images/travel.jpg', "description": "Automobiles are also available.", "type": "Automobile", "name": "Jeep", "price": 245, "discount": 4 },
  ]
  dupHomepageContent ;
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', 'white');
    this.dupHomepageContent = this.homePageContent;
  }

  deleteItem(item) {
    let dialogRef = this.dialog.open(DeleteComponent, {
      width: '35%',
      height: '25%',
      data: { title: "Item", item: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isdeleted)
        this.messageService.info("Item Deleted successfully", "Shop Bridge");
    });
  }

  editItem(item) {
    let dialogRef = this.dialog.open(EditItemComponent, {
      width: '40%',
      height: '60%',
      data: { title: "Item", item: item }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The edit dialog was closed');
      if (result)
        this.messageService.info("Item Updated successfully", "Shop Bridge");
    });
  }

  logout() {
    this.router.navigate(['./logout']);
    sessionStorage.clear();

  }

  filterbyType(type : string) {
    console.log(type);
    let filtereditems = [];
    if(this.dupHomepageContent.length > 0 && type != 'clear') {
      this.dupHomepageContent.forEach(item => {
        if(item.type == type) {
          filtereditems.push(item);
        }
      })
      this.homePageContent = filtereditems;
    }
    else if(type == 'clear') {
      this.homePageContent = this.dupHomepageContent;
    }
  }

}
