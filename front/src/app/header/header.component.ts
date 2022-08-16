import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { MatToolbar } from '@angular/material/toolbar';
import { CartService } from '../_services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private cartService:CartService
  ) {}
  public totalItem:number=0;

  ngOnInit(): void {this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }
  public isAdmin(){
    return this.userAuthService.isAdmin();
  }
  public isUser(){
    return this.userAuthService.isUser();
  }
  

}