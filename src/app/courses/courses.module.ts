import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CoursesRoutingModule } from './courses-routing.module';




@NgModule({
  declarations: [
    CourseComponent,
    ListCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
  ],
})
export class CoursesModule { }
