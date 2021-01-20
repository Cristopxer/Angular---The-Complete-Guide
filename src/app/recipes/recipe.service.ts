import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Pizza',
  //     'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese',
  //     'https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?fit=900%2C574&ssl=1',
  //     [new Ingredient('Tomatoes', 2), new Ingredient('Cheese', 1)]
  //   ),
  //   new Recipe(
  //     'Mozzarella sticks',
  //     'One at a time, coat each mozzarella stick in the flour mixture, then the egg mixture, then in the bread crumbs and finally into the oil',
  //     'https://lilluna.com/wp-content/uploads/2017/12/mozz-sticks-resize-6.jpg',
  //     [new Ingredient('Breadcumbs', 2), new Ingredient('Cheese', 4)]
  //   ),
  // ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  update(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  delete(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
