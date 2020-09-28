import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from './../interface/post';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() post: 'post';
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  submitPostForm(form: NgForm) {
    this.submitted.emit({
      title: form.value.title,
      thought: form.value.thought,
    });
  }
}
