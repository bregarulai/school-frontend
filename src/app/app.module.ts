import { CurriculumService } from './curriculum.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumListComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [CurriculumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
