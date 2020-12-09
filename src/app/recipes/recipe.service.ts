import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A test Recipe','This is a simply test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),    
        new Recipe('A test Recipe','another Recipe test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),    
      ];

      getRecipe(){
          return this.recipes.slice();
      }
}