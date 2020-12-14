import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Pizza',
        'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese',
        'https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?fit=900%2C574&ssl=1',
        [
            new Ingredient('Tomatoes', 2),
            new Ingredient('Cheese', 1),
        ]),    
        new Recipe('Mozzarella sticks',
        'One at a time, coat each mozzarella stick in the flour mixture, then the egg mixture, then in the bread crumbs and finally into the oil',
        'https://lilluna.com/wp-content/uploads/2017/12/mozz-sticks-resize-6.jpg',
        [
            new Ingredient('Breadcumbs', 2),
            new Ingredient('Cheese', 4),
        ]),    
      ];

      constructor(private slService:ShoppingListService){

      }

      getRecipe(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}