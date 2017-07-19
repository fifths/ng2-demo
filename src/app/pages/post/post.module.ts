import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post.component';
import {routing} from './post.routing';
import {PostService} from '../../theme/services/post.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PostComponent],
  providers: [PostService]
})
export class PostModule {
}
