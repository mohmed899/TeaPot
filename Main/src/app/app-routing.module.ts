import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FeaturesComponent } from './Components/features/features.component';

const routes: Routes = [
  {path:"homes/Contact",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
