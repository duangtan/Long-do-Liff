import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-liff-app';
  
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
        // เพิ่มโค้ดเพื่อแสดงโปรไฟล์หรือใช้ข้อมูลโปรไฟล์ที่ได้ตามต้องการ
      })
      .catch((err: any) => {
        console.error('Error getting profile', err);
      });
  }

  // logout() {
  //   liff.logout();
  // }
}
