import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})

export class RecipeComponent {
  recipes?: any;

  constructor(private recipeService: RecipeService) {}


  searchRecipe() {
    this.recipeService.getRecipes('').subscribe((res) => {
      console.log(res);
      let recipeArray: any[];
      recipeArray = res.hits;
      console.log(recipeArray);

      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      
      console.table(recipes);
      this.recipes = recipes;
    });
  }

}
