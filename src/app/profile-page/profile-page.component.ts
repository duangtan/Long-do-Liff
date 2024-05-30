import { Component, OnInit } from '@angular/core';
import { LiffService } from '../liff.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  profile: any;

  constructor(private liffService: LiffService) {}
  ngOnInit(): void {
    this.profile =  this.liffService.getProfile();
  }
      
      
    
  
}
