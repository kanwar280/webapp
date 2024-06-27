import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { ArtsellerComponent } from './artseller/artseller.component';
import { MenuComponent } from './menu/menu.component';
import { BirthdayComponentComponent } from './birthday-component/birthday-component.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent  },
  { path: 'homepage-component', component:  HomepageComponent  },
  {path: 'about', component: AboutComponent},
  {path: 'seller', component:ArtsellerComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'projects', component:ProjectsComponent},
  {path:'birthday/:name/:age', component: BirthdayComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ 
  
}
