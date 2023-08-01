import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
    {
      path: 'login',
      loadChildren:  () => import('./auth/auth.module').then( m => m.AuthModule)
    },
    {
      path: 'courses',
      loadChildren:  () => import('./courses/courses.module').then( m => m.CoursesModule)
    },
    {
      path: '**',
      redirectTo: '/'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
