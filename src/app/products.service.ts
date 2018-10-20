import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /**
   * Some Mock Products.
   */
  private productsList: any = [{
    sku: "123456",
    name: "potatoes",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a07_roasted_potatoes.jpg.rend.hgtvcom.826.620.suffix/1446840363593.jpeg",
    categories: ["Food", "Vegetables"],
    price: 32,
    day: 4,
    month: 9,
    year: 2020
  }, {
    "sku": "783-90-6277",
    "name": "Steam Pan Full Lid",
    "image": "http://dummyimage.com/136x240.bmp/cc0000/ffffff.png",
    "categories": ["Comedy"],
    "price": "4872.29",
    "day": 1,
    "month": 8,
    "year": 2031
  }, {
    "sku": "729-89-4217",
    "name": "Beer - Alexander Kieths, Pale Ale",
    "image": "http://dummyimage.com/168x141.jpg/dddddd/000000.png",
    "categories": ["Action", "Crime", "Drama", "Thriller"],
    "price": "9812.24",
    "day": 30,
    "month": 9,
    "year": 2034
  }, {
    "sku": "408-60-1346",
    "name": "Beer - Maudite",
    "image": "http://dummyimage.com/241x155.png/cc0000/ffffff.png",
    "categories": ["Documentary"],
    "price": "3015.24",
    "day": 16,
    "month": 6,
    "year": 2079
  }, {
    "sku": "857-98-8881",
    "name": "Bread - Raisin Walnut Oval",
    "image": "http://dummyimage.com/131x201.bmp/ff4444/ffffff.png",
    "categories": ["Drama", "Sci-Fi", "War"],
    "price": "6970.54",
    "day": 4,
    "month": 6,
    "year": 2041
  }, {
    "sku": "320-67-4023",
    "name": "Juice - Apple, 1.36l",
    "image": "http://dummyimage.com/208x233.jpg/5fa2dd/ffffff.png",
    "categories": ["Drama", "Romance"],
    "price": "6406.57",
    "day": 20,
    "month": 4,
    "year": 2054
  }, {
    "sku": "888-13-9281",
    "name": "Pepper - Chilli Seeds Mild",
    "image": "http://dummyimage.com/199x210.jpg/cc0000/ffffff.png",
    "categories": ["Documentary"],
    "price": "9559.27",
    "day": 27,
    "month": 2,
    "year": 2088
  }, {
    "sku": "713-42-1166",
    "name": "Soup - Knorr, Chicken Gumbo",
    "image": "http://dummyimage.com/176x209.png/5fa2dd/ffffff.png",
    "categories": ["Horror"],
    "price": "9681.60",
    "day": 27,
    "month": 9,
    "year": 2067
  }, {
    "sku": "543-86-9798",
    "name": "Wine - Conde De Valdemar",
    "image": "http://dummyimage.com/210x150.bmp/cc0000/ffffff.png",
    "categories": ["Drama"],
    "price": "8769.70",
    "day": 5,
    "month": 3,
    "year": 2078
  }, {
    "sku": "496-16-3407",
    "name": "Turnip - Mini",
    "image": "http://dummyimage.com/147x141.bmp/cc0000/ffffff.png",
    "categories": ["Action", "Comedy"],
    "price": "1944.69",
    "day": 7,
    "month": 2,
    "year": 2081
  }, {
    "sku": "436-24-2084",
    "name": "Lamb - Leg, Bone In",
    "image": "http://dummyimage.com/221x221.jpg/5fa2dd/ffffff.png",
    "categories": ["Action", "Comedy", "Drama"],
    "price": "5912.53",
    "day": 24,
    "month": 12,
    "year": 2074
  }, {
    "sku": "391-69-6234",
    "name": "Scallops 60/80 Iqf",
    "image": "http://dummyimage.com/196x110.bmp/5fa2dd/ffffff.png",
    "categories": ["Crime", "Drama", "Thriller"],
    "price": "786.29",
    "day": 10,
    "month": 2,
    "year": 2039
  }, {
    "sku": "262-06-5100",
    "name": "Mushroom - Morels, Dry",
    "image": "http://dummyimage.com/146x149.jpg/5fa2dd/ffffff.png",
    "categories": ["Action", "Drama", "Thriller"],
    "price": "7885.58",
    "day": 23,
    "month": 11,
    "year": 2019
  }, {
    "sku": "614-36-4132",
    "name": "Bread - Raisin Walnut Oval",
    "image": "http://dummyimage.com/247x249.png/dddddd/000000.png",
    "categories": ["Animation", "Children", "Drama"],
    "price": "5131.74",
    "day": 11,
    "month": 7,
    "year": 2030
  }, {
    "sku": "725-84-2019",
    "name": "Soup - Knorr, Veg / Beef",
    "image": "http://dummyimage.com/173x104.jpg/5fa2dd/ffffff.png",
    "categories": ["Children", "Drama", "Fantasy", "Mystery", "Thriller"],
    "price": "7540.83",
    "day": 4,
    "month": 11,
    "year": 2091
  }, {
    "sku": "258-20-7811",
    "name": "Soup - Beef Conomme, Dry",
    "image": "http://dummyimage.com/227x229.jpg/5fa2dd/ffffff.png",
    "categories": ["Drama"],
    "price": "6042.89",
    "day": 8,
    "month": 6,
    "year": 2062
  }, {
    "sku": "882-75-6786",
    "name": "Oyster - In Shell",
    "image": "http://dummyimage.com/141x181.bmp/dddddd/000000.png",
    "categories": ["Crime", "Drama"],
    "price": "388.74",
    "day": 3,
    "month": 12,
    "year": 2038
  }, {
    "sku": "862-41-2965",
    "name": "Plasticknivesblack",
    "image": "http://dummyimage.com/117x140.jpg/ff4444/ffffff.png",
    "categories": ["Action", "Comedy", "Drama"],
    "price": "3584.53",
    "day": 27,
    "month": 5,
    "year": 2035
  }, {
    "sku": "549-06-2801",
    "name": "Soup - Campbells Chili Veg",
    "image": "http://dummyimage.com/103x247.jpg/dddddd/000000.png",
    "categories": ["Comedy"],
    "price": "4157.94",
    "day": 1,
    "month": 10,
    "year": 2044
  }, {
    "sku": "196-72-6781",
    "name": "Soda Water - Club Soda, 355 Ml",
    "image": "http://dummyimage.com/169x136.bmp/dddddd/000000.png",
    "categories": ["Comedy", "Drama", "Horror"],
    "price": "2286.25",
    "day": 23,
    "month": 3,
    "year": 2066
  }, {
    "sku": "578-14-0647",
    "name": "Sugar - Brown",
    "image": "http://dummyimage.com/227x228.jpg/dddddd/000000.png",
    "categories": ["Crime", "Drama"],
    "price": "92.12",
    "day": 28,
    "month": 11,
    "year": 2098
  }];

  /**
   * Status For Modal Component Entry/Exit/Data.
   */
  shownProduct = {
    showModal: false,
    isSpecific: false,
    isEdited: false,
    product: undefined
  };

  /**
   * A string [] comparator function.
   * @param arr1 first string array to be compared
   * @param arr2 second string array to be compared
   */
  private compareArr(arr1: string, arr2: string) {
    if (!arr1 || !arr2)
      return false;
    if (!(arr1.length === arr2.length))
      return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].toLowerCase() != arr2[i].toLowerCase())
        return false;
    }
    return true;
  }

  /**
   * A Function returning the index of the passed product in the produtsList array; Returns -1 if it is not Found.
   * @param prod Product to be compared
   */
  private indexFinder(prod) {
    return this.productsList.findIndex(
      (element: any) => {
        if (element.sku.toLowerCase() === prod.sku.toLowerCase() &&
          element.name.toLowerCase() === prod.name.toLowerCase() &&
          element.image.toLowerCase() === prod.image.toLowerCase() &&
          this.compareArr(element.categories, prod.categories) &&
          element.price === prod.price &&
          element.day === prod.day &&
          element.month === prod.month &&
          element.year === prod.year)
          return true;
      });

  }

  /**
   * Adds the passed product to the productsList.
   * @param newProduct New Product to be added to the productsList [].
   */
  addNewProduct(newProduct): void {
    this.productsList.push(newProduct);
  }

  /**
   * Returns an [] containing the products whose SKU is or contains part of the productSKU.
   * @param productSKU SKU of the product to be found.
   */
  findProductSKU(productSKU) {
    if (productSKU == undefined)
      return this.productsList;
    let list = [];
    this.productsList.forEach(element => {
      if (element.sku.toLowerCase().includes(productSKU.toLowerCase()))
        list.push(element);
    });
    if (list.length > 0)
      return list;
    else
      return undefined;
  }

  /**
   * Returns an [] containing the products whose name is or contains part of the productName.
   * @param productName Name of the product(s) to be found.
   */
  findProductName(productName) {
    if (productName == null || productName == undefined || productName == "")
      return this.productsList;
    let list = [];
    this.productsList.forEach(element => {
      if (element.name.toLowerCase().includes(productName.toLowerCase()))
        list.push(element);
    });
    console.log(list);
    if (list.length > 0)
      return list;
    else
      return undefined;
  }

  /**
   * Removes the passed product (product Object) from the productsList [].
   * @param product Product to be removed from the productsList []
   */
  removeProduct(product): boolean {
    let ind = this.indexFinder(product);
    if (ind >= 0) {
      this.productsList.splice(ind, 1);
      return true;
    }
    else
      return false;
  }
  /**
 * Edits the passed product (product Object) in the productsList [].
 * @param product Product to be edited in the productsList []
 */
  editProduct(product, editedProduct): boolean {
    let ind = this.indexFinder(product);
    if (ind >= 0) {
      this.productsList[ind] = editedProduct;
      return true;
    }
    return false;
  }
  /**
   * Returns the Last product added to producList [] or the specified prdouct in the shownProduct Object.
   */
  getProductToDisplay() {
    if (this.shownProduct.isSpecific) {
      return this.shownProduct.product;
    }
    else {
      return this.productsList[this.productsList.length - 1];
    }
  }

  constructor() {
  }
}