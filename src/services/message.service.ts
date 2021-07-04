import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Subject } from "rxjs";

@Injectable()
export class MessageService {
    constructor(private snackbar : MatSnackBar) {

    }

    private messageSource = new Subject<any>();

    messageSource$ = this.messageSource.asObservable();

    info(message:string,app : string) {
        this.snackbar.open(message,app,{duration : 2000})
    }

    error(message:string,app : string) {
        this.snackbar.open(message,app,{duration : 2000})
    }
}