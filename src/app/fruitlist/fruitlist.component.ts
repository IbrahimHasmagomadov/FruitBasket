import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlisdataService } from '../fruitlisdata.service';
@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlisdataService)

  fontColorGood = 'green';
  fontColorBad = 'red';

 

  addComment(comment: string, index: number) {
    this.fruitlistdata.addCommentToFruit(comment, index)
  }

}
