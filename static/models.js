"use strict";

const BASE_API_URL = "http://localhost:5000/api/cupcakes";

/**Create a class of cupcake */

let cupcakes = [];

class Cupcake {

  constructor(id, flavor, size, rating, image) {

    this.id = id;
    this.flavor = flavor;
    this.size = size;
    this.rating = rating;
    this.image = image;

  }

  /**API call to get info about a cupcake
   * returns an object with cupcakes*/
  static async getCupcakes() {

    const response = await axios.get(BASE_API_URL);

    cupcakes = response.data.cupcakes.map(cupcake => new Cupcake(
      cupcake.id, cupcake.flavor, cupcake.size,
      cupcake.rating, cupcake.image
    ));


  }

  /**Post cupcake info to API and instanciate a cupcake locally */
  static async addCupcake(flavor, image, rating, size) {

    const response = await axios.post(BASE_API_URL,
      {"flavor": flavor, "image": image, "rating": rating, "size": size });

    const cupcake = response.data.cupcake;

    return cupcakes.push(
      new Cupcake(cupcake.id, cupcake.flavor, cupcake.size, cupcake.rating, cupcake.image));
  }


  async updateCupcake(){

  }

  async deleteCupcake(){

  }

}

