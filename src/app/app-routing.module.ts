

import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [

  {path: 'curriculums', component: CurriculumListComponent},
  {path: 'curriculum', component: CurriculumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
