import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AppRoutingModule} from './app-routing.module'
import {BrowserModule} from '@angular/platform-browser'
import {AuthModule} from './auth/auth.module'
import {RouterOutlet} from '@angular/router'

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    RouterOutlet,
  ],
})
export class AppModule { }
