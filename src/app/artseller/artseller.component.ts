import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-artseller',
  templateUrl: './artseller.component.html',
  styleUrls: ['./artseller.component.css']
})
export class ArtsellerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  gobacc(){
    this.route.navigate(['homepage-component']);
  }

}
