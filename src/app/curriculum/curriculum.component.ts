import { CurriculumService } from './../curriculum.service';
import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../models/curriculum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  curriculum: Curriculum;

  constructor(private service: CurriculumService) { }

  ngOnInit(): void {
    this.curriculum = this.service.getCurriculum();
  }

}
