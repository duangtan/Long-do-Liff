import { Injectable } from '@angular/core';
import liff from '@line/liff';

@Injectable({
  providedIn: 'root'
})
export class LiffService {

  constructor() { }
  ngOnInit() {
    this.initializeLiff();
  }

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
    liff.getProfile()
      .then(profile => {
        console.log(profile);
      })
      .catch((err: any) => {
        console.error('Error getting profile', err);
      });
  }
}
