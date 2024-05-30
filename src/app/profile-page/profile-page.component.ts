import { Component, OnInit } from '@angular/core';
import { LiffService } from '../liff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  profile: any;

  constructor(private liffService: LiffService,private router: Router) {}
  ngOnInit(): void {
    this.profile =  this.liffService.getProfileData();
    console.log("Profile",this.profile);
  }
  goHome(){
    this.router.navigate(['/home']); 
  }
  Logout(){
    this.liffService.liffLogout();
    
  }
      
    
  
}
