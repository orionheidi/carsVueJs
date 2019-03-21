import {httpService} from './HttpService';

const cars = [
    {
      id: '',
      brand: "Merdza",
      model: "Fab",
      year: 2013,
      maxSpeed:500,
      isAutomatic: true,
      engine:"amaizing",
      numberOfDoors:4

    },
    {
      id: '',
      brand: "Suzuki",
      model: "Fab 4",
      year: 2018,
      maxSpeed:600,
      isAutomatic: true,
      engine:"fast",
      numberOfDoors:4

    },
    {
      id: '',
      brand: "Mazda",
      model: "Fab",
      year: 2013,
      maxSpeed:500,
      isAutomatic: true,
      engine:"amaizing",
      numberOfDoors:4

    },
    
  ]


export default class CarService {
  list() {
    return cars;
  }

  getAll(){
    return httpService.get('/cars');
}

  // add(car) {
  //   // car.id = nextId
  //   cars.push(car)
  //   // nextId++
  // }


  create (car){
    return httpService.post('/cars',car);
  }

  get(id){
    return httpService.get(`cars/${id}`);
}

  // edit(car) {
  // return httpService.put('/cars/'+ id, car)
  // }

  edit(car) {
    return httpService.put(`cars/${id}`, car)
    }

    remove (id) {
      return httpService.delete(`cars/${car.id}`)
    }
  


  // find(id) {
  //   return customers.find(customer => customer.id == id);
  // }

  // add(customer) {
  //   customer.id = nextId
  //   customers.push(customer)
  //   nextId++
  // }

  // remove(customer) {
  //   customers.splice(customers.indexOf(customer), 1)
  // }

  // addProductToCustomer(customer, product) {
  //   customer.products.push(product)
  // }
}

export const carService = new CarService();