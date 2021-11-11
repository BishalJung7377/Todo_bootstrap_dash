import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { APIServiceService } from '../services/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiService:APIServiceService,
    private router:Router){
  }
  canActivate(): boolean{
    if (this. apiService.loggedIn()){
      return true
    }
    else{
      this.router.navigate([''])
      return false
    }
  }
}
