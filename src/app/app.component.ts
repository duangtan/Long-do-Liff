import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';
import { LiffService } from './liff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-liff-app';
  
  // ngOnInit() {
  //   // this.initializeLiff();
  // }

  // initializeLiff() {
  //   liff.init({ liffId: '2005378766-8o1j06XX' })
  //     .then(() => {
  //       if (liff.isLoggedIn()) {
  //         this.getProfile();
  //       } else {
  //         liff.login();
  //       }
  //     })
  //     .catch((err: any) => {
  //       console.error('LIFF Initialization failed', err);
  //     });
  // }

  // getProfile() {
  //   liff.getProfile()
  //     .then(profile => {
  //       console.log(profile);
  //     })
  //     .catch((err: any) => {
  //       console.error('Error getting profile', err);
  //     });
  // }
  profile: any;

  constructor(private liffService: LiffService) {}

  ngOnInit() {
    this.liffService.initializeLiff();
  }

  async showProfile() {
    try {
      this.profile = await this.liffService.getProfile();
    } catch (error) {
      console.error('Error getting profile', error);
    }
  }

}
