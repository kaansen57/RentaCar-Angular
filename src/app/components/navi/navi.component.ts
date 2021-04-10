import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private authService: AuthService) {}

  loggedIn: boolean;
  users: User[];
  logout(){
    this.authService.deleteToken('user');
    this.authService.deleteToken('token');
    this.authService.deleteToken('expirationDate');
    location.reload();
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isAuthenticated();
    if (this.loggedIn) {
      this.users = JSON.parse(localStorage.getItem('user'));
    } else {
      console.log('data yok');
    }
  }
}
