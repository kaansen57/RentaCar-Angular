import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder,
  FormGroup,
  FormControl,
  Validators,} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserOperationClaim } from 'src/app/models/userOperationClaim/userOperationClaim';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:[MessageService]
})
export class UserEditComponent implements OnInit {

  constructor(
    private userService:UserService,
    private userOperationClaimService:UserOperationClaimService,
    private localStorageService : LocalStorageService ,
     private formBuilder: FormBuilder,
     private messageService: MessageService,
     private router: Router,
     ) { }

  userUpdateForm : FormGroup;
  user : User[];
  userOperationClaim : UserOperationClaim[];


  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      id:[null,Validators.required],
      email : ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      findexScore: ['', Validators.required],
      status: ['', Validators.required],
      passwordHash: ['', Validators.required],
      passwordSalt: ['', Validators.required],
    });
  }

  pageReload(){
    setTimeout(() => {
      location.reload();
     }, 2000);
  }

  editUser(){
    let userModel = {...this.userUpdateForm.value};
    this.userService.updateUser(userModel).subscribe((response)=>{
        this.messageService.add({severity:'success',detail:'Bilgiler Güncellendi!'});
          localStorage.clear();
          this.pageReload();
      },(err)=>{
        this.messageService.add({severity:'error',detail:'Bilgiler Güncellenemedi!'});
      })
    }

    getUserOperationClaim(userId:number){
      this.userOperationClaimService.getUserOperationClaim(userId).subscribe((response)=>{
          console.log(response);
          this.userOperationClaim = response.data;
      })
    }

    getUserInformation(){
      this.user = this.localStorageService.getItem('user');
      this.getUserOperationClaim(this.user[0].id);
    }
  ngOnInit(): void {
    this.createUserUpdateForm();
    this.getUserInformation(); 
    this.userUpdateForm.patchValue({...this.user[0]})
  }

}
