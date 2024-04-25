import { Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CvComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
