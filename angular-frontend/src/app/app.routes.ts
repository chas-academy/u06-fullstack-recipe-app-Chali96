import { Routes } from '@angular/router';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {path: 'search', component: RecipesearchComponent},
    {path: 'recipe', component: RecipeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
];
