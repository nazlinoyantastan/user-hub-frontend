import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment.dto';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {

  @Input() comment: Comment = new Comment ();

}
