import { Routes } from '@angular/router';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipe', component: RecipeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'search', component: RecipesearchComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    // {path: 'recipe:id', component: RecipeComponent}
];
