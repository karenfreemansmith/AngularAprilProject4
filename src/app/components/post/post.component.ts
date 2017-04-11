import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title="";
  body="";
  
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>this.title=params.title);
    this.route.params.subscribe(params=>this.body=params.body);
  }

  ngOnInit() {
  }

}
