import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { filter, map } from 'rxjs';
import { Recipe } from '../../interfaces/recipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [FormsModule, RouterLink, RecipeidformatterPipe],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})
export class RecipesearchComponent {
  recipes?: Recipe[];

  searchTerm = '';

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

