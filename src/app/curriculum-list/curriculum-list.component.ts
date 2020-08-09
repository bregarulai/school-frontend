import { CurriculumService } from './../curriculum.service';
import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../models/curriculum';
import { ConstantPool } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.css']
})
export class CurriculumListComponent implements OnInit {
  curriculums: Array<Curriculum>;

  constructor(private service: CurriculumService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getCurriculums()
                    .subscribe((data: any[]) =>{
                      this.curriculums = data;
                    });

  }

  onSelectedCurriculum(selectedCurriculum: any) {
    this.service.setCurriculum(selectedCurriculum);
    this.router.navigate(['/curriculum']);
  }

}
