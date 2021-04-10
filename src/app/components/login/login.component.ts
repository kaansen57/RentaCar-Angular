
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Token } from 'src/app/models/auth/token';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private messageService:MessageService, private router:Router) {}

  token : Token[];
  loginForm: FormGroup;
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  userGet(email:string){
    this.userService.getUserByEmail(email).subscribe((response)=>{
        console.log(response.data);
        this.authService.setToken('user',response.data);
        return response.data;
    });
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = {...this.loginForm.value};
      this.authService.login(loginModel).subscribe((response)=>{
        this.authService.setToken('token',response.data.token);
        this.authService.setToken('expiration',response.data.expiration);
        this.userGet(loginModel.email);
          this.pageReload();
        this.messageService.add({severity:'success',detail:'Giriş Yapıldı'});
      },(errorResponse)=>{
        this.messageService.add({severity:'error',detail:errorResponse.error});
      })
    }
  }
 pageReload() {
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);
  }
  ngOnInit(): void {
    this.createLoginForm();
  }
}
