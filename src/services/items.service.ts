import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Itemconfig } from "src/models/itemconfig";
import { MessageService } from "./message.service";
import 'rxjs/add/operator/map'; 

@Injectable()
export class ItemsService {
    constructor(private http : HttpClient, private messageService: MessageService) {

    }

    // getItemsforHomePage():Promise<Itemconfig[]> {
    //     return data from service call and if error occurs fucntion to handle it is handleApiError
    // }

    // handleApiError(error : any) {
    //     if(error && error.message) {
    //         this.messageService.error(error.message,"Shop Bridge");
    //     }
    //     else {
    //         this.messageService.error("Problem occured while Handling the Request", "Shop Bridge");
    //     }

    // }
}