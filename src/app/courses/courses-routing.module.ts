import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';


const routes: Routes = [
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'list-courses',
    component: ListCoursesComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CoursesRoutingModule { }
