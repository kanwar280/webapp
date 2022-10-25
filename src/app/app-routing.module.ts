import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { ArtsellerComponent } from './artseller/artseller.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [
  { path: '', component: LandingpageComponent  },
  { path: 'homepage-component', component:  HomepageComponent  },
  {path: 'about', component: AboutComponent},
  {path: 'seller', component:ArtsellerComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
