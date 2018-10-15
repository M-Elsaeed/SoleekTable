import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  allInvTchd = false;
  addingForm: FormGroup;
  private prodSubmitted = false

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
        image: controlVals.image.value,
        categories: [controlVals.categories.value],
        price: controlVals.price.value,
        day: controlVals.day.value,
        month: controlVals.month.value,
        year: controlVals.year.value,
      };
      console.log(newProd);
      this.prodService.addNewProduct(newProd);
      this.prodSubmitted=true;
      this.reset();
    }
    else {
      console.log(this.addingForm.controls);
      console.log("invalid form");
    }
  }


  constructor(private formBuilder: FormBuilder, private prodService: ProductsService) { }

  ngOnInit() {
    this.addingForm = this.createFormGroupWithBuilder();
  }

  //if all are touched and invalid return true
  allTouchedInvalid(myForm) {
    let formControls = Object.values(Object.values(myForm)[6]);
    let returnVal = true;
    formControls.forEach(element => {
      //console.log(element.invalid, element.touched, element.invalid && element.touched);
      returnVal = returnVal && (element.invalid && element.touched);
    });
    if (returnVal)
      this.allInvTchd = true;
    return returnVal;
  }
  reset() {
    // Resets to provided model
    this.addingForm.reset(this.addingForm = this.createFormGroupWithBuilder());
  }
  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      sku: ["", Validators.required],
      name: ["", Validators.required],
      image: ["", Validators.required],
      categories: ["", Validators.required],
      price: ["", Validators.required],
      day: ["", Validators.required],
      month: ["", Validators.required],
      year: ["", Validators.required],
    });
  }

  log(a) {
    console.log(a);
  }
}
