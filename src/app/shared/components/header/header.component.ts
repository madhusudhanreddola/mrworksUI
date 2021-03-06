import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() deviceLayout:string = '';

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  imgSrc: string = '/assets/images/gta-wordmark--white.svg';

  
  bgCustomClass:string ='mt-tl-bg-light';

  constructor() { }

  ngOnInit(): void {
    console.log('Header deviceLayout : ' + this.deviceLayout);
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  tbMouseOver(){
    this.bgCustomClass ='mt-tl-bg-dark';
  }

  tbMouseOut(){
    this.bgCustomClass ='mt-tl-bg-light';
  }

}
