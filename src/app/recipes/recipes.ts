import { Component, inject, OnInit } from '@angular/core';
import { RecipeHero } from '../recipe-hero/recipe-hero';
import { Recipe, RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeHero],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes implements OnInit {
  recipes: Recipe[] = [];
  recipeService: RecipeService = inject(RecipeService);
  loading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.loading = true;
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        console.log(data);
        this.recipes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load recipes';
        this.loading = false;
      },
    });
  }
}
