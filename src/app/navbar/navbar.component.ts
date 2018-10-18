import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // boolean defining if the navbar is open or cloased.
  active = false;
  constructor(private router: Router, private location: Location) {
  }
  /**
   * ONLY IF the orientation mandates a side navbar to top navbar transformation, Reload.
   */
  reloadComponent() {
    if (window.innerWidth > 1200 && window.innerHeight <= 1200 || window.innerWidth <= 1200 && window.innerHeight > 1200)
      location.reload();
  }
  ngOnInit() {
    //Registering a listener for orientation change.
    window.addEventListener("orientationchange", this.reloadComponent, false);
  }
  /**
   * 
   * @param navBar The navBar element which is binded in the template to #main.
   * 
   * This function toggles the animation responsible for hiding and showing of the navbar
   * as a whole and also of the text content of the navbar.
   */
  toggleNav(navBar,content) {
    console.log(this.active);
    if (!this.active) {
      this.active = true;
      navBar.style.animation = 'none';
      navBar.offsetHeight; /* trigger reflow */
      content.style.animation = 'none';
      content.offsetHeight; /* trigger reflow */
      content.style.animation = 'fadeIn 1s ease 0s 1 normal forwards running';
      if (window.innerWidth <= 1200) {
        navBar.style.animation = 'fadeInDown 1s ease 0s 1 normal forwards running';
      }
      else {
        navBar.style.animation = 'fadeInLeft 1s ease 0s 1 normal forwards running';
      }
    }
    else {
      this.active = false;
      navBar.style.animation = 'none';
      navBar.offsetHeight; /* trigger reflow */
      content.style.animation = 'none';
      content.offsetHeight; /* trigger reflow */
      content.style.animation = 'fadeOut 1s ease 0s 1 normal forwards running';
      if (window.innerWidth <= 1200) {
        navBar.style.animation = 'retreatUp-nav 1s ease 0s 1 normal forwards running';
      }
      else {
        navBar.style.animation = 'retreat-nav 1s ease 0s 1 normal forwards running';
      }
    }

  }

}
