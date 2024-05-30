import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LiffService } from '../liff.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router,private liffService: LiffService) {}
  showProfilePage(){
    this.router.navigate(['/profile']); 
  }
  Logout(){
    this.liffService.liffLogout();
    console.log("logout");
  }
}
