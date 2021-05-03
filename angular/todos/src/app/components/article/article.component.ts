import { Component, OnInit } from '@angular/core';

type COMMENT_TYPE = {
  id:number,
  content:string
}



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // **********************(*ngIF)***************
  show:boolean = false
  // *********************[ngSwitch]************

  // painding|active|remove
  articleStatus:string = 'activey'

  // **************************(*ngfor)********************
  comments:COMMENT_TYPE[]=[{
    id:1,
    content:'great!'
  },
  {
    id:2,
    content:'nice'
  },
  {
    id:3,
    content:'trash'
  }
]
}
