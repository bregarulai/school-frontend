import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.component.html',
  styleUrls: ['./add-curriculum.component.css']
})
export class AddCurriculumComponent implements OnInit {
   name: string;
   myForm: FormGroup;

  constructor(private service: CurriculumService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('')
    });
  }

  addCurriculum(data: any) {
    this.name = data.name;
    this.service.addCurriculum(this.name);
    this.myForm.reset();
  }

}
