import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
