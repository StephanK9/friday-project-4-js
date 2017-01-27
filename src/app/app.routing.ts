import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HeadquarterComponent } from './headquarter/headquarter.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'headquarter',
    component: HeadquarterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
