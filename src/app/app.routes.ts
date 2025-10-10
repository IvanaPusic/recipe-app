import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Recipes } from './recipes/recipes';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'recipes', component: Recipes },
];
