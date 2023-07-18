import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router,private reactiveModule:ReactiveFormsModule){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  logIn()
  {
     this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login is SuccessFull");
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        alert("user Not Found !! ")
      }
     },err=>{
        alert("Server Side Error ");
     }
     )
  }
}
