<template>
       <div>
    <h1>CARS</h1>
       <hr/>
    <div class="row">
      <div class="col-sm-4">
        <form @submit.prevent="addCar">
          <div class="form-group">
            <label for="name">Brand</label>
            <input v-model="car.brand" type="text" class="form-control" id="brand" placeholder="Enter brand" minlength="2" required="required">
          </div>
           <div class="form-group">
            <label for="name">Model</label>
            <input v-model="car.model" type="text" class="form-control" id="model" placeholder="Enter model" minlength="2" required="required">
          </div>
        <label>Year:</label>
        <select id="dob"  v-model="car.year">
        <option v-for="year in years">{{ year }}</option>
        </select>
        <div class="form-group">
        <label for="name">Number of Dors</label>
        <input v-model="car.numberOfDoors" type="number" class="form-control" id="numberOfDoors" placeholder="Enter numberOfDoors" required="required">
        </div>
        <div class="form-group">
        <label for="name">Max Speed </label>
        <input v-model="car.maxSpeed" type="number" class="form-control" id="maxSpeed" placeholder="Enter maxSpeed">
        </div>
         <div class="form-group">
        <label for="name"> is Automatic </label>
         <input type="checkbox" value="test" v-model="car.isAutomatic" required="required">
            <div>{{car.isAutomatic}}</div>
         </div>
         <input type="radio" id="diesel" value="diesel" v-model="car.engine" required="required">
            <label for="diesel">Diesel</label>
            <br>
            <input type="radio" id="petrol" value="petrol" v-model="car.engine">
        <label for="petrol">Petrol</label>
        <input type="radio" id="electric" value="electric" v-model="car.engine">
        <label for="electric">Electric</label>
        <input type="radio" id="hubryd" value="hubryd" v-model="car.engine">
        <label for="hubryd">Hybrid</label>
        <br>
          <button type="submit" class="btn btn-primary">Submit</button><br>
          <button type="submit" @click="edit" class="btn btn-primary">Edit</button>
        <button type="reset" class="btn btn-primary" @click="resetField">Reset</button>
         <button @click="preview">Show car</button>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
import  { carService} from '../services/CarService';
export default {
  data() {
    return {

      car: {},
        cars: []
    //   selected: false
    //   customers: customerService.list()
      

    }
  },

  methods:{
  async addCar(){
      console.log('hej')
    try{
    //   const {data} = await carService.getAll();
    //   this.cars = data;
  
      const {data: newCar} = await carService.create(this.car);
      this.car = {}
      console.log(newCar);
      this.$router.push('/cars')
    

    

    }catch(error){
      console.log(error);
    }
    
  },
  async edit(){
      console.log('hej')
    try{
    //   const {data} = await carService.getAll();
    //   this.cars = data;
   
      const {data: newCar2} = await carService.getId(this.car.id);
      this.car = {}
      console.log(newCar2);
      this.$router.push('/cars')


    }catch(error){
      console.log(error);
    }
    
  },


  resetField(){
  this.car = {}
  },

      preview() {
    //   let carShow = this.cars.filter(car => car);
      alert(JSON.stringify(this.car))
  },
  },
  computed : {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index)
    }
  }
}

</script>

<style>

</style>
