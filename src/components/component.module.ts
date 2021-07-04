import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteComponent } from './delete/delete.component';
import { LogoutComponent } from './logout/logout.component';
import { MessageService } from 'src/services/message.service';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        EditItemComponent,
        DeleteComponent,
        LogoutComponent
    ],
    imports: [
      BrowserModule,
      MatFormFieldModule,
    ],
    exports : [
      MatFormFieldModule
    ],
    providers: [MessageService],
    bootstrap: []
  })
  export class ComponentModule { }