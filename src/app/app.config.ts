import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core'
import {provideRouter} from '@angular/router'

import {routes} from './app-routing.module'
import {authHttpInterceptorFn, provideAuth0} from '@auth0/auth0-angular'
import {provideHttpClient, withInterceptors} from '@angular/common/http'

export const appConfig: ApplicationConfig = {providers: [
  provideZoneChangeDetection({eventCoalescing: true}),
  provideRouter(routes),
  provideAuth0({
    domain: 'mes-devoirs.eu.auth0.com',
    clientId: '2Hj7GOD9k1ddIM60YDW09o5cZAXzTjVr',
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://mes-devoirs.eu.auth0.com/api/v2/',
      scope: 'read:current_user openid profile',
    },
    httpInterceptor: {allowedList: [{
      uri: 'http://localhost:8080/*',
      tokenOptions: {authorizationParams: {
        // The attached token should target this audience
        audience: 'https://mes-devoirs.eu.auth0.com/api/v2/',

        // The attached token should have these scopes
        scope: 'read:current_user',
      }},
    }]},
  }),
  provideHttpClient(),
  provideHttpClient(withInterceptors([authHttpInterceptorFn])),
]}
