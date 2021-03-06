import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sideBarOpen = false;
  deviceLayout = 'web';
  showVideoBg = true;


  constructor( breakpointObserver: BreakpointObserver ) { 
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.activateMobileLayout();
      }else{
        this.activateWebLayout();
      }
      console.log('this.deviceLayout : ' + this.deviceLayout);
    });
  }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  activateMobileLayout(){
    this.deviceLayout = "mobile";
    // this.sideBarOpen = false;
    // this.showVideoBg = false;
  }

  activateWebLayout(){
    this.deviceLayout = "web";
    this.sideBarOpen = false;
  }

}
