import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  interval;
  timeLeft: number = 10;

  constructor(private router : Router,private renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ce37f1');
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      else {
        this.router.navigate(['']);
        clearInterval(this.interval);
      }
    },1000)
  }

}
