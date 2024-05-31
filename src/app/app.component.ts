import { Component, OnInit } from '@angular/core';
import { LiffService } from './liff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-liff-app';
  
  constructor(private liffService: LiffService) {}

  ngOnInit() {
    this.liffService.initializeLiff();
  } 

}
