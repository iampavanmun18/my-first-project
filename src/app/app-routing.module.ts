import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: 'about',
    children: [
      {
        path: 'company',
        component: AboutCompanyComponent,
      },
      { path: 'me', component: AboutMeComponent },
    ],
    component: AboutComponent,
  },

  { path: 'user/:id', component: UserComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
