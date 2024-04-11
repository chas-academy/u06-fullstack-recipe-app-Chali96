import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, RecipeidformatterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recipes?: any;

  constructor (private recipeService: RecipeService) {}

ngOnInit() {

  this.getAllRecipes();
}

getAllRecipes() {
  this.recipeService.getRecipes('all').subscribe((res) => {
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

  breakfastRecipe() {
    this.recipeService.getRecipes('breakfast').subscribe((res) => {
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


  lunchRecipe() {
    this.recipeService.getRecipes('lunch').subscribe((res) => {
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

  dinnerRecipe() {
    this.recipeService.getRecipes('dinner').subscribe((res) => {
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

  dessertRecipe() {
    this.recipeService.getRecipes('dessert').subscribe((res) => {
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

  snackRecipe() {
    this.recipeService.getRecipes('snack').subscribe((res) => {
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


  vegetarianRecipe() {
    this.recipeService.getRecipes('vegetarian').subscribe((res) => {
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


  veganRecipe() {
    this.recipeService.getRecipes('vegan').subscribe((res) => {
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
  
  dairyRecipe() {
    this.recipeService.getRecipes('dairy').subscribe((res) => {
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
  
  glutenRecipe() {
    this.recipeService.getRecipes('gluten').subscribe((res) => {
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



