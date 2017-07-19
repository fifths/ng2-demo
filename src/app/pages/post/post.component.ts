import {Component, OnInit} from '@angular/core';
import {PostService} from '../../theme/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  data: any;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.postService.list().subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }

}
