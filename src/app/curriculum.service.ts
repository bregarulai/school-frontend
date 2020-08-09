
import { Curriculum } from './models/curriculum';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private baseUrl: string = 'http://localhost:8081/api';
  private curriculum: Curriculum;

  constructor(private http: HttpClient) { }

  getCurriculums() {
    return this.http.get(this.baseUrl + '/curriculums');

  }

  addCurriculum(name: string) {
    console.log(name);
    this.http.post<string>(this.baseUrl + '/addCurriculum', name)
          .subscribe((val) =>{
            console.log(val);
          });
              
  }

  public getCurriculum(): Curriculum {
    return this.curriculum;
  }

  public setCurriculum(curriculum: Curriculum) {
    this.curriculum = curriculum;
  }
}
