import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    var clickme = document.getElementById("imageonlanding")!
    clickme.style.display = "none";
    setTimeout(this.showStuff, 2000)
  }
  showStuff(){
    var clickme = document.getElementById("imageonlanding")!
    clickme.style.display = "inline";
  }
  changeimgtodog(){
    var myimg = document.getElementById("imgName")! as HTMLImageElement;
    myimg.src = "../assets/IMG5.jpg";
    var elem = document.getElementById("type")!
    elem.innerHTML = "Dogg";
  }
  changeimgtoselfpotrait(){
    var myimg = document.getElementById("imgName")! as HTMLImageElement;
    myimg.src = "../assets/IMG4.jpg";
    var elem = document.getElementById("type")!
    elem.innerHTML = "potrait";
  }
  changeimgtosketch1(){
    var myimg = document.getElementById("imgName")! as HTMLImageElement;
    myimg.src = "../assets/IMG6.jpg";
    var elem = document.getElementById("type")!
    elem.innerHTML = "pt.1";
  }
  changeimgtosketch2(){
    var myimg = document.getElementById("imgName")! as HTMLImageElement;
    myimg.src = "../assets/IMG1.jpg";
    var elem = document.getElementById("type")!
    elem.innerHTML = "pt.2";
  }
  changeimgtosoldier(){
    var myimg = document.getElementById("imgName")! as HTMLImageElement;
    myimg.src = "../assets/IMG7.jpg";
    var elem = document.getElementById("type")!
    elem.innerHTML = "Soldier";
  }
  changeimgtosketch3(){
    var myimg = document.getElementById("imgName")! as HTMLImageElement;
    myimg.src = "../assets/IMG2.jpg";
    var elem = document.getElementById("type")!
    elem.innerHTML = "Pt.3";
  }
  openmenu(){
    this.route.navigate(['menu']);
  }
}
