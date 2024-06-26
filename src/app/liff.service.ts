import { Injectable } from '@angular/core';
import liff from '@line/liff';

@Injectable({
  providedIn: 'root'
})
export class LiffService {

  private profile: any;

  constructor() { }

  initializeLiff() {
    liff.init({ liffId: '2005378766-8o1j06XX' })
      .then(() => {
        if (liff.isLoggedIn()) {
          this.getProfile();
        } else {
          liff.login();
        }
      })
      .catch((err: any) => {
        console.error('LIFF Initialization failed', err);
      });
  }

  getProfile() {
    return liff.getProfile()
      .then(profile => {
        console.log('sdsds');
        this.profile = profile;
        return this.profile;
      })
      .catch((err: any) => {
        console.error('Error getting profile', err);
        throw err;
      });
  }

  getProfileData() {
    return this.profile;
  }
  
  liffLogout() {
    liff.logout();
    const os = liff.getOS();
    console.log('Platform:', os);
    if(os==="web"){
      if (liff.isLoggedIn()) {
        this.getProfile();
      } else {
        liff.login();
        liff.getProfile();
      }
    }else{
      liff.closeWindow();
    }
  }
}
