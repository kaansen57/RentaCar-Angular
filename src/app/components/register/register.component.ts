import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private userService: UserService,
    private messageService: MessageService, 
    private formBuilder: FormBuilder,private router:Router) { }

  registerForm: FormGroup;
  
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  userGet(email:string){
    this.userService.getUserByEmail(email).subscribe((response)=>{
        console.log(response.data);
        this.localStorage.setItem('user',response.data);
        return response.data;
    });
  }
  register() {
    if (this.registerForm.valid) {
      let registerModel = {...this.registerForm.value};
      this.authService.register(registerModel).subscribe((response)=>{
        this.localStorageSetItem(response);
       this.userGet(registerModel.email);
        this.pageReload();
        this.messageService.add({severity:'success',detail:'Kayıt Başarılı'});
      },(errorResponse)=>{
        this.messageService.add({severity:'error',detail:errorResponse.error});
      })
    }
  }

  localStorageSetItem(response:any){
    this.localStorage.setItem('token',response.data.token);
    this.localStorage.setItem('expiration',response.data.expiration);
    this.localStorage.setItem('user',{...this.registerForm.value});
  }
  pageReload() {
    setTimeout(() => {
      location.href = '/';
    }, 2000);
  }

  ngOnInit(): void {
    if(this.localStorage.getItem('token')){
       this.router.navigate(['/cars']);
    }
    this.createRegisterForm();
  }
}
