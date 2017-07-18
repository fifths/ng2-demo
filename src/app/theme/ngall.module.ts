import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {MenuComponent} from './components/menu/menu.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {PageTopComponent} from './components/page-top/page-top.component';


const NGALL_COMPONENTS = [
  MenuComponent,
  SidebarComponent,
  PageTopComponent
];

@NgModule({
  declarations: [
    NGALL_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NGALL_COMPONENTS
  ]
})
export class NgAllModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgAllModule,
      providers: [],
    };
  }
}
