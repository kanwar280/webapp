import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { HttphandlerserviceService } from '../httphandlerservice.service';
@Component({
  selector: 'app-artseller',
  templateUrl: './artseller.component.html',
  styleUrls: ['./artseller.component.css']
})
export class ArtsellerComponent implements OnInit {
  data : any= []
    
  constructor(private route: Router, private service:HttphandlerserviceService) {}
  ngOnInit(): void {
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
