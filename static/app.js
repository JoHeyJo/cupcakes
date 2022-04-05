"use strict";



const $cupcakes = $("#cupcake-area");


async function populate_area(){

  await Cupcake.getCupcakes()
  
  console.log(cupcakes)
  for(let cupcake of cupcakes){
    $cupcakes.append(`<li>${cupcake.flavor}</li>`)
  }
}




populate_area();