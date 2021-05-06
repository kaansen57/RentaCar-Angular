import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private authService: AuthService , 
    private localStorage: LocalStorageService) {}

  loggedIn: boolean;
  users: User[];
  logout(){
    localStorage.clear();
    location.reload();
  }

  ngOnInit(): void {
    this.loggedIn = this.localStorage.isAuthenticated();
    if (this.loggedIn) {
      this.users = JSON.parse(localStorage.getItem('user'));
    } else {
      // console.log('Veri Yok');
    }
  }
}
