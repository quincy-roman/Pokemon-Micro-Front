import { PcService } from './../../services/pc.service';
import { Component, OnInit } from '@angular/core';
import { PcBox } from 'src/app/models/pc-box';

@Component({
  selector: 'app-pc-page',
  templateUrl: './pc-page.component.html',
  styleUrls: ['./pc-page.component.css']
})
export class PcPageComponent implements OnInit {
  boxes: PcBox[];

  constructor(private pcService: PcService) { }

  ngOnInit(): void {
    this.getBoxesForTrainer(1)
  }

  public getBoxesForTrainer(trainerId: number) {
    this.pcService.getBoxesByTrainer(trainerId)
    .subscribe(
      data => {
        console.log(data)
        this.boxes = data;
      }
    )
  }

}
