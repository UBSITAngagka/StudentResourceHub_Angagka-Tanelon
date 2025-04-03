import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from "./categories/design/design.component";
import { ProgrammingComponent } from "./categories/programming/programming.component";
import { MathComponent } from "./categories/math/math.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: 'programming', component: ProgrammingComponent },
      { path: 'design', component: DesignComponent },
      { path: 'math', component: MathComponent },
      { path: '', redirectTo: 'programming', pathMatch: 'full' },  
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'add-resource', component: AddResourceComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
