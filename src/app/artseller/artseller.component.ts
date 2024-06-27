import { Component, NgModule, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttphandlerserviceService } from '../httphandlerservice.service';
@Component({
  selector: 'app-artseller',
  templateUrl: './artseller.component.html',
  styleUrls: ['./artseller.component.css']
})
export class ArtsellerComponent implements OnInit {
  data : any= []
  userDetails = {
    name: '',
    email: '',
    age: 10,
  };
    
  constructor(private route: Router, private service:HttphandlerserviceService) {}
  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }
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
  gobacc(){
    this.route.navigate(['homepage-component']);
  }
  onFileSelected(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      if(file.type == 'image/png' || file.type=="image/jpeg" || file.type=="image/jpg"){
        var reader = new FileReader();
        this.data.body = "please wait till we get results back..."

        //reader.readAsBinaryString(file)
        reader.onloadend = () => {
          console.log("Image done loading...")
          const base64string = reader.result as string;
          const finalstring = base64string.split(',')[1];
          this.service.postreq(finalstring).subscribe((Response : any)=>{
          console.log(Response)
        this.data = Response})
        }
        if(file){
          reader.readAsDataURL(file);
        }
        
        
      }
      else{
        alert('Please select only jpeg or png.');
      }
      
    }
  }
  
  
  

}
