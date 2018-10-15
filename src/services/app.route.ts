import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/**
 * @Components
 */
import { HomeComponent } from '../app/home/home.component';
import { AddingComponent } from '../app/adding/adding.component';
import { ModalComponent } from '../app/modal/modal.component';

/**
 * Routes
 */

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Add', component: AddingComponent },
    { path: 'Edit', component: ModalComponent },
    { path: 'Remove', component: AddingComponent },
    { path: '**', redirectTo: 'not-found' }
];

/**
 * Router Module Configuration
 */
export const router: ModuleWithProviders = RouterModule.forRoot(routes);
