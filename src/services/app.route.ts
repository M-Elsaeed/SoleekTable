import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/**
 * @Components
 */
import { HomeComponent } from '../app/home/home.component';
import { AddingComponent } from '../app/adding/adding.component';
import { EditComponent } from 'src/app/edit/edit.component';

/**
 * Routes
 */

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Add', component: AddingComponent },
    { path: 'Edit', component: EditComponent },
    { path: 'Edit/:Delete', component: EditComponent },
    { path: '**', redirectTo: 'not-found' }
];

/**
 * Router Module Configuration
 */
export const router: ModuleWithProviders = RouterModule.forRoot(routes);
