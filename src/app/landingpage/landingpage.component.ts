import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private route:Router){}



  ngOnInit(): void {
    consoleText(['Kanwar portfolio'], 'text',['white']);
    var clickme = document.getElementById("clickme")!
    clickme.style.display = "none";
    setTimeout(showStuff, 3000)
  }
  clicked(){
    this.route.navigate(['homepage-component']);
  }

}
function showStuff() {
  var clickme = document.getElementById("clickme")!
    clickme.style.display = "inline";
        }
function consoleText(words : any, id : any, colors : any) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console')!
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)!
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1500)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;

    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'


    }
  }, 10)
}
