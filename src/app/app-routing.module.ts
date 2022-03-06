import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UsersComponent} from "./pages/users/users.component";
import {UserEditorComponent} from "./pages/user-editor/user-editor.component";
import {ConfigsComponent} from "./pages/configs/configs.component";
import {ConfigEditorComponent} from "./pages/config-editor/config-editor.component";
import {MailsComponent} from "./pages/mails/mails.component";
import {LogsComponent} from "./pages/logs/logs.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/user-editor', component: UserEditorComponent },
  { path: 'configs', component: ConfigsComponent },
  { path: 'configs/config-editor', component: ConfigEditorComponent },
  { path: 'mails', component: MailsComponent },
  { path: 'logs', component: LogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
