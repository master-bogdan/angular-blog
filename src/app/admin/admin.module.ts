import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AlertComponent } from './components/alert/alert.component';
// Shared
import { SharedModule } from '../modules/shared.module';
import { AuthGuard } from './services/auth.guard';
import { SearchPipe } from '../pipes/search.pipe';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
          { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
          { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AlertService],
})
export class AdminModule {}
