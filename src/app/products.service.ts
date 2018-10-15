import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private mockProd = {
    sku: "T8EH83347",
    name: "potatoes",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a07_roasted_potatoes.jpg.rend.hgtvcom.826.620.suffix/1446840363593.jpeg",
    categories: ["Food", "Vegetables"],
    price: 32,
    day: 4,
    month: 9,
    year: 2020
  };
  private productsList: any = [this.mockProd];
  private compareArr(arr1, arr2) {
    if (!arr1 || !arr2)
      return false;
    if (!(arr1.length === arr2.length))
      return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i])
        return false;
    }
    return true;
  }
  private indexFinder(prod) {
    return this.productsList.findIndex(
      (element: any) => {
        if (element.sku === prod.sku &&
          element.name === prod.name &&
          element.image === prod.image &&
          this.compareArr(element.categories, prod.categories) &&
          element.price === prod.price &&
          element.day === prod.day &&
          element.month === prod.month &&
          element.year === prod.year)
          return true;
      });

  }
  addNewProduct(newProduct): void {
    this.productsList.push(newProduct);
  }
  removeProduct(product): boolean {
    let ind = this.indexFinder(product);
    if (ind >= 0) {
      this.productsList.splice(ind, 1);
      return true;
    }
    else
      return false;
  }
  editProduct(product, editedProduct): boolean {
    let ind = this.indexFinder(product);
    if (ind >= 0) {
      this.productsList[ind] = editedProduct;
      return true;
    }
    return false;
  }
  getProducts(): JSON[] {
    return this.productsList;
  }
  getLastProduct(): JSON {
    return this.productsList[this.productsList.length - 1];
  }

  constructor() {
  }
}
