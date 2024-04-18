import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})

export class RecipeComponent implements OnInit {
  recipeId: string | null | undefined;

  allRecipes: any;

  recipe: any;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchRecipeData();
  }

  fetchRecipeData() {
    if (!this.recipeId) {
      return;
    }

    this.recipeService.getRecipe(this.recipeId).subscribe((result: any) => {
      this.allRecipes = result;

      let recipeDetails = Object.values(this.allRecipes).map((res: any) => res)
      this.recipe = recipeDetails[0];
    });
  }

}
