import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(  private route:Router) { }

  ngOnInit(): void {
  }
  about(){
    this.route.navigate(['about']);
  }
  seller(){
    this.route.navigate(['seller']);
  }
}
