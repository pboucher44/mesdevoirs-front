import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {AuthModule} from './auth/auth.module'

export const routes: Routes = [{
  path: 'auth',
  loadChildren: () => AuthModule,
}, {
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full',
}]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
