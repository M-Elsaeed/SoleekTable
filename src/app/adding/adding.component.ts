import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  addingForm: FormGroup;

/**
 * Returns an array of Keys....For Use in Templates as Object is not recognized there.
 * @param obj Object Whose Keys are to be obtained.
 */
  objKeys(obj) {
    return Object.keys(obj);
  }
  /**
   * Submits the Form to the Products Service to allow adding the newly created product.
   */
  onSubmit() {
    if (this.addingForm.valid) {
      let controlVals = this.addingForm.controls;
      console.log(controlVals.sku.value,
        controlVals.name.value,
        controlVals.image.value,
        controlVals.categories.value.split(","),
        controlVals.price.value,
        controlVals.day.value,
        controlVals.month.value,
        controlVals.year.value);
      let newProd = {
        sku: controlVals.sku.value,
        name: controlVals.name.value,
        image: controlVals.image.value == "" ? "https://dummyimage.com/600x400/000/fff" : controlVals.image.value,
        categories: controlVals.categories.value.split(","),
        price: controlVals.price.value,
        day: controlVals.day.value,
        month: controlVals.month.value,
        year: controlVals.year.value,
      };
      console.log(newProd);
      this.prodService.addNewProduct(newProd);
      this.prodService.shownProduct.isSpecific = false;
      this.prodService.shownProduct.product = newProd;
      this.prodService.shownProduct.showModal = true;
      this.reset();
    }
    else {
      console.log(this.addingForm.controls);
      console.log("invalid form");
    }
  }

  /**
   * Resets to provided model.
   */
  reset() {
    this.addingForm.reset(this.addingForm = this.createFormGroupWithBuilder());
  }
  /**
   * Returns a Form Group with the required Validators
   */
  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      sku: ["", Validators.compose([Validators.minLength(5), Validators.required])],
      name: ["", Validators.compose([Validators.minLength(3), Validators.required])],
      image: ["", Validators.compose([Validators.minLength(3), Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|gif))/i)])],
      categories: ["", Validators.compose([Validators.minLength(3), Validators.required])],
      price: ["", Validators.compose([Validators.required])],
      day: ["", Validators.compose([Validators.required, Validators.min(1), Validators.max(31)])],
      month: ["", Validators.required],
      year: ["", Validators.compose([Validators.required, Validators.min(new Date().getFullYear()), Validators.max(2100)])],
    });
  }
  constructor(private formBuilder: FormBuilder, public prodService: ProductsService) { }

  ngOnInit() {
    this.addingForm = this.createFormGroupWithBuilder();
  }
}
