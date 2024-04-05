import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { filter, map } from 'rxjs';
import { Recipe } from '../../interfaces/recipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})
export class RecipesearchComponent {
  recipes?: Recipe[];

  searchTerm = 'chicken';

  constructor(private recipeService: RecipeService) {}

  searchRecipe() {
    this.recipeService.getRecipes(this.searchTerm).subscribe((res) => {
      console.log(res);
      let recipes: Recipe[];
      recipes = res.hits.map((item: { recipe: { label: any; image: any; healthLabels: any; ingredientLines: any; totalTime: any; }; _links: { self: { href: any; }; }; }) => {
        return{
          label: item.recipe.label,
          image: item.recipe.image,
          healthLabels: item.recipe.healthLabels,
          ingredientLines: item.recipe.ingredientLines,
          totalTime: item.recipe.totalTime,
          selfref: item._links.self.href
        };
      });

      console.table(recipes);
      this.recipes = recipes;
    });
  }
}
  // breakfastRecipe() {
  //   this.recipeService.getRecipes('breakfast').subscribe((res) => {
  //     console.log(res);
  //     let recipeArray: any[];
  //     recipeArray = res.hits;
  //     console.log(recipeArray);

  //     let recipes = recipeArray.map(item => {
  //       return {
  //         self: item._links.self.href,
  //         label: item.recipe.label,
  //         image: item.recipe.image,
  //         totalTime: item.recipe.totalTime,
  //         ingredientLines: item.recipe.ingredientLines
  //       }
  //     });
      
  //     console.table(recipes);
  //     this.recipes = recipes;
  //   });
  // }

  // lunchRecipe() {
  //   this.recipeService.getRecipes('lunch').subscribe((res) => {
  //     console.log(res);
  //     let recipeArray: any[];
  //     recipeArray = res.hits;
  //     console.log(recipeArray);

  //     let recipes = recipeArray.map(item => {
  //       return {
  //         self: item._links.self.href,
  //         label: item.recipe.label,
  //         image: item.recipe.image,
  //         totalTime: item.recipe.totalTime,
  //         ingredientLines: item.recipe.ingredientLines
  //       }
  //     });
      
  //     console.table(recipes);
  //     this.recipes = recipes;
  //   });
  // }

  // dinnerRecipe() {
  //   this.recipeService.getRecipes('dinner').subscribe((res) => {
  //     console.log(res);
  //     let recipeArray: any[];
  //     recipeArray = res.hits;
  //     console.log(recipeArray);

  //     let recipes = recipeArray.map(item => {
  //       return {
  //         self: item._links.self.href,
  //         label: item.recipe.label,
  //         image: item.recipe.image,
  //         totalTime: item.recipe.totalTime,
  //         ingredientLines: item.recipe.ingredientLines
  //       }
  //     });
      
  //     console.table(recipes);
  //     this.recipes = recipes;
  //   });
  // }

  // dessertRecipe() {
  //   this.recipeService.getRecipes('dessert').subscribe((res) => {
  //     let recipeArray: any[];
  //     recipeArray = res.hits;

  //     let recipes = recipeArray.map(item => {
  //       return {
  //         self: item._links.self.href,
  //         label: item.recipe.label,
  //         image: item.recipe.image,
  //         totalTime: item.recipe.totalTime,
  //         ingredientLines: item.recipe.ingredientLines
  //       }
  //     });
      
  //     this.recipes = recipes;
  //   });
  // }

  // snackRecipe() {
  //   this.recipeService.getRecipes('snack').subscribe((res) => {
  //     console.log(res);
  //     let recipeArray: any[];
  //     recipeArray = res.hits;
  //     console.log(recipeArray);

  //     let recipes = recipeArray.map(item => {
  //       return {
  //         self: item._links.self.href,
  //         label: item.recipe.label,
  //         image: item.recipe.image,
  //         totalTime: item.recipe.totalTime,
  //         ingredientLines: item.recipe.ingredientLines
  //       }
  //     });
      
  //     console.table(recipes);
  //     this.recipes = recipes;
  //   });
  // }

