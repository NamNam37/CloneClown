import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ConfigsComponent } from './pages/configs/configs.component';
import { LogsComponent } from './pages/logs/logs.component';
import { MailsComponent } from './pages/mails/mails.component';
import { LoginComponent } from './pages/login/login.component';
import { LogReadComponent } from './pages/log-read/log-read.component';
import { ConfigEditorComponent } from './pages/config-editor/config-editor.component';
import { UserEditorComponent } from './pages/user-editor/user-editor.component';
import { UserVerifyComponent } from './pages/user-verify/user-verify.component';
import { FtpComponent } from './pages/ftp/ftp.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ConfigsTableComponent } from './components/configs-table/configs-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardErrorlogTableComponent } from './components/dashboard-errorlog-table/dashboard-errorlog-table.component';
import { LogsTableComponent } from './components/logs-table/logs-table.component';
import { ConfigEditorSourceComponent } from './components/config-editor-source/config-editor-source.component';
import { ConfigEditorDestComponent } from './components/config-editor-dest/config-editor-dest.component';
import { ConfigEditorUsersComponent } from './components/config-editor-users/config-editor-users.component';
import { UsersEditorTableComponent } from './components/users-editor-table/users-editor-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ConfigsComponent,
    LogsComponent,
    MailsComponent,
    LoginComponent,
    LogReadComponent,
    ConfigEditorComponent,
    UserEditorComponent,
    UserVerifyComponent,
    FtpComponent,
    UsersTableComponent,
    ConfigsTableComponent,
    SidebarComponent,
    DashboardErrorlogTableComponent,
    LogsTableComponent,
    ConfigEditorSourceComponent,
    ConfigEditorDestComponent,
    ConfigEditorUsersComponent,
    UsersEditorTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
