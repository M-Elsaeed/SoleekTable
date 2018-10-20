import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { ProductsService } from '../products.service'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showItemModally = false;
  searchForm = this.formBuilder.group({
    sku: [''],
    name: ['']
  });
  /**
   * Resets the form to its initial state.
   */
  resetForm() {
    this.searchForm = this.formBuilder.group({
      sku: [''],
      name: ['']
    });
  }
  /**
   * Prompts modal component to show the selected product.
   * @param product Product to be modally Shown.
   */
  showProductModal(product) {
    this.prodService.shownProduct.showModal = true; this.prodService.shownProduct.isSpecific = true; this.prodService.shownProduct.product = product;
  }
  constructor(private formBuilder: FormBuilder, private prodService: ProductsService) {

  }
  ngOnInit() {
  }

}
