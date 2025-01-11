import {Component, Inject} from '@angular/core'
import {AuthService} from '@auth0/auth0-angular'
import {AsyncPipe, CommonModule, DOCUMENT} from '@angular/common'
import {concatMap, tap} from 'rxjs'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
})
export class AuthComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private http: HttpClient
  ) {}
  classrooms = {}

  getMetadata() {
    this.auth.user$
      .pipe(
        concatMap((user) =>
          // Use HttpClient to make the call
          this.http.get(
            encodeURI('http://localhost:8080/v1/classrooms')
          )
        ),
        tap((classrooms) => (this.classrooms = classrooms))
      )
      .subscribe()
  }
}
