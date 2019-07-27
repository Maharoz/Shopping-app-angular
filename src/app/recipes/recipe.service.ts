import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('test recipe','simple test recipe','https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg'),
        new Recipe('test','simple test','https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg')
     ]; 

     getRecipes(){
         return this.recipes.slice();
     }
}