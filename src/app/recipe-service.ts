import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Recipe {
  id: number;
  img: string;
  title: string;
  description: string;
  servings: number;
  prep: number;
  cook: number;
  ingredients: string[];
  instructions: string[];
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('assets/data.json');
  }
}
