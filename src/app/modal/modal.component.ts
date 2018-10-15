import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'D:/SoleekTable/src/app/products.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  displayedProduct = this.prodService.getLastProduct();
  constructor(private prodService: ProductsService) { }

  ngOnInit() {
  }

}
