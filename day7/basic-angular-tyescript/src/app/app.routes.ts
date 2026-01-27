import { Routes } from '@angular/router';
// import { HomeComponent } from './features/home/home';
// import { About } from './features/about/about';
// import { Contact } from './features/contact/contact';
// import { Login } from './features/login/login';



export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home').then(m => m.HomeComponent)
        // component: HomeComponent
    },
    {
        path: 'about',
        loadChildren: () => import('./features/about/about').then(m => m.About)
        // component: About
    },
    {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact').then(m => m.Contact)
        // component: Contact
    },
    {
        path: 'login',
        loadChildren: () => import('./features/login/login').then(m => m.Login)
        // component: Login
    },
    {
        path: '***',
        loadChildren: () => import('./shared/components/not-found/not-found').then(m => m.NotFound)
    }
];
 