import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule, MatInputModule, MatMenuModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'
import { DeleteComponent } from 'src/components/delete/delete.component';
import { EditItemComponent } from 'src/components/edit-item/edit-item.component';
import { LogoutComponent } from 'src/components/logout/logout.component';
import { MessageService } from 'src/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DeleteComponent,
    EditItemComponent,
    LogoutComponent
  ],
  entryComponents:[
    DeleteComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatCarouselModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  exports : [
    MatFormFieldModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
