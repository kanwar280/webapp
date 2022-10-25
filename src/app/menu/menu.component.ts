import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  back(){
    this.route.navigate(['homepage-component']);
  }
  sell(){
    this.route.navigate(['seller']);
  }
  about(){
    this.route.navigate(['about']);
  }
}
