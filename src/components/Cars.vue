<template>
  <div id="app">
    <h1>Cars</h1>
<div id="cars">
  <div class="car" v-for="car in cars" :key="car.id">
    <h3>{{ car.brand}}</h3>
    {{car.model}}
     {{car.year}}
       {{car.maxSpeed}}
  </div>
</div>
  </div>
</template>

<script>
import  { carService} from '../services/CarService';
export default {

    data(){
    return{
      cars: []
    }
  },
  async created(){
      console.log('hej')
    try{
      const {data} = await carService.getAll();
      this.cars = data;
    //   const {data: newCar} = await carService.create({
    //     brand: "Merdza",
    //   model: "Fab",
    //   year: 2013,
    //   maxSpeed:500,
    //   isAutomatic: true,
    //   engine:"amaizing",
    //   numberOfDoors:4
    //   });
    //   console.log(newCar);
    }catch(error){
      console.log(error);
    }
    
  }

}
</script>

<style>

</style>
