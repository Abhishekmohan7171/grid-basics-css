import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid';
  navIcon:boolean= false;
  nav:any;
  width: number = 15;
  navCollapse(){
this.navIcon = !this.navIcon;

    this.nav  = document.getElementById('navBar');
    // this.nav.style.width = '5%';
    //this.navIcon = !this.navIcon;
    if(this.navIcon){
      this.width=5;
    }else if(!this.navIcon){
      this.width=15;
    }
  }
}
