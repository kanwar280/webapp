import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-birthday-component',
  templateUrl: './birthday-component.component.html',
  styleUrls: ['./birthday-component.component.css']
})
export class BirthdayComponentComponent implements OnInit {
  name: string | undefined;
  age: 0 = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name']; 
      this.age = params['age']
      console.log('name, age:', this.name, this.age);
    });
  }

}
