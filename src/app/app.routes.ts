import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BookingsComponent } from './components/pages/bookings/bookings.component';
import { EditComponent } from './components/pages/edit/edit.component';


export const routes: Routes = [
    
    {path: 'home', component : HomeComponent},
    {path: 'bookings', component: BookingsComponent},
    {path:'edit/:id', component: EditComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: '**', redirectTo: '/home', pathMatch:'full'}

];
