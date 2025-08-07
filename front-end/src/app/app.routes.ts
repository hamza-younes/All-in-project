import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserFromComponent } from './components/user-from/user-from.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AppUserTestComponent } from './components/app-user-test/app-user-test.component';

export const routes: Routes = [
    {path: '', component: UsersComponent},
    {path: 'add', component: UserFromComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'test', component: AppUserTestComponent},
    {path: 'edit/:id', component: UserFromComponent}

];
