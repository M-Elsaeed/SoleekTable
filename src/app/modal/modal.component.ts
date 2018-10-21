import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductsService } from 'D:/SoleekTable/src/app/products.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  displayedProduct = this.prodService.getProductToDisplay();
  constructor(public prodService: ProductsService, public router: Router) {
  }

  ngOnInit() {
  }

  /**
   * This Function allows smooth exit of the Component.
   * @param htmlStructure This is the main div Container.
   */
  destructMe(htmlStructure) {
    htmlStructure.className = 'main-container';

    this.resetAnimation(htmlStructure);

    setTimeout(() => {
      this.prodService.shownProduct = {
        showModal: false,
        isSpecific: false,
        isEdited:false,
        product: undefined
      };
    }, 1000);
  }
  /**
   * Resets the animation of an HTML element
   * @param element The element whoose animaiton will be reset
   */
  resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = 'fadeOutRight 1s ease 0s 1 normal forwards running';
  }
}
