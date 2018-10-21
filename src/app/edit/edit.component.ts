import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  displayedProduct = undefined;// Product To Be Displayed
  deletionMode = false;// State Boolean
  editingForm: FormGroup; // Form Binding

  /**
   * Analyzes Query and URL Parameters and sets state booleans accordingly.
   */
  fetchProduct() {

    this.activatedRoute.params.subscribe(routeParams => {
      if (routeParams == undefined) {
        this.deletionMode = false;
      }
      else if (String(routeParams.Delete).toLowerCase() == "delete") {
        this.deletionMode = true;
      }
      else {
        this.deletionMode = false;
      }
    }
    );
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      let productSKU = undefined;
      productSKU = params['sku'];
      if (productSKU != undefined)
        this.displayedProduct = this.prodService.findProductSKU(productSKU);
      if (this.displayedProduct != undefined) {
        this.displayedProduct = this.displayedProduct[0];
      }
    }
    );
  }

  objKeys(obj) {
    return Object.keys(obj);
  }
  /**
   * Submits the Form to the Products Service to allow editing of an existing Product.
   */
  onSubmit() {
    console.log('submitted')
    if (this.editingForm.valid) {
      let controlVals = this.editingForm.controls;
      let newProd = {
        sku: this.displayedProduct.sku,
        name: controlVals.name.value,
        image: controlVals.image.value == "" ? "https://dummyimage.com/600x400/000/fff.png" : controlVals.image.value,
        categories: controlVals.categories.value.split(","),
        price: controlVals.price.value,
        day: controlVals.day.value,
        month: controlVals.month.value,
        year: controlVals.year.value,
      };
      console.log(newProd);
      this.prodService.editProduct(this.displayedProduct, newProd);
      this.prodService.shownProduct.isSpecific = true;
      this.prodService.shownProduct.product = newProd;
      this.prodService.shownProduct.showModal = true;
      this.prodService.shownProduct.isEdited = true;
      this.fetchProduct();
    }
    else {
      console.log(this.editingForm.controls);
      console.log("invalid form");
    }
  }
  /**
   * Resets to provided model  
   */
  reset() {
    this.editingForm.reset({
      sku: this.displayedProduct.sku,
      name: this.displayedProduct.name,
      image: this.displayedProduct.image,
      categories: String(this.displayedProduct.categories),
      price: this.displayedProduct.price,
      day: this.displayedProduct.day,
      month: this.displayedProduct.month,
      year: this.displayedProduct.year,
    });
  }

  /**
   * Returns a Form Group with the required Validators
   */
  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      sku: [],
      name: ["", Validators.compose([Validators.minLength(3), Validators.required])],
      image: ["", Validators.compose([Validators.minLength(3), Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|gif))/i)])],
      categories: ["", Validators.compose([Validators.minLength(3), Validators.required])],
      price: ["", Validators.compose([Validators.required])],
      day: ["", Validators.compose([Validators.required, Validators.min(1), Validators.max(31)])],
      month: ["", Validators.required],
      year: ["", Validators.compose([Validators.required, Validators.min(new Date().getFullYear()), Validators.max(2100)])],
    });
  }
  constructor(private activatedRoute: ActivatedRoute,
    public prodService: ProductsService, private formBuilder: FormBuilder) {
    this.editingForm = this.createFormGroupWithBuilder()
  }
  ngOnInit() {
    this.prodService.shownProduct.showModal = false;
    this.fetchProduct();
    this.reset();
  }

}
