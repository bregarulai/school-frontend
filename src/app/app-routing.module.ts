

import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { AddCurriculumComponent } from './add-curriculum/add-curriculum.component';

const routes: Routes = [

  {path: 'curriculums', component: CurriculumListComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'addCurriculum', component: AddCurriculumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
