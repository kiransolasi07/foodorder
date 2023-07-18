import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'app/services/food/food.service';
import { Tag } from 'app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = 'center'

  tags?:Tag[] =[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
     this.tags = this.fs.getAllTag();
  }
}
