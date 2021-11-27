import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }
  usuario={
    email:'',
    password:'',
  }
  ngOnInit(): void {
  }
    login(){
      console.log(this.usuario);
      const { email, password} = this.usuario;

      this.authService.login(email, password).then(res =>{
        console.log('login satisfacctorio'+ res)
      })  
    }
      loginWithGoogle(){
        console.log(this.usuario);
        const { email, password} = this.usuario;
        this.authService.loginwithGoogle(email, password).then(res =>{
          console.log('login satisfacctorio'+ res)
        })
        }
      loginWithFacebook(){
          console.log(this.usuario);
          const { email, password} = this.usuario;
          this.authService.loginWithFacebook(email, password).then(res =>{
            console.log('login satisfacctorio'+ res)
          })
          }
          loginWithGitHub(){
            console.log(this.usuario);
            const { email, password} = this.usuario;
            this.authService.loginWithGitHub(email, password).then(res =>{
              console.log('login satisfacctorio'+ res)
            })
            }
        obtenerUsuarioLogueado(){
          this.authService.getUserState().subscribe(res => {
            console.log('state'+ res)
          })
        }
      }
