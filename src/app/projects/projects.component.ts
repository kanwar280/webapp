import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  artworks(){
    this.route.navigate(['homepage-component']);
  }
  projects(){
    this.route.navigate(['projects']);
  }
  about(){
    this.route.navigate(['homepage-component']);
  }
  chat(){
    
  }
  openimagereko(){
    this.route.navigate(['seller'])
  }

}

