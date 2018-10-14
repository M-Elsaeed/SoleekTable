import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/**
 * @Components
 */
import { HomeComponent } from '../app/home/home.component';


/**
 * Routes
 */

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
];

/**
 * Router Module Configuration
 */
export const router: ModuleWithProviders = RouterModule.forRoot(routes);
