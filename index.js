const car = (name, model, year, power, image) => ({name, model, year, power, image})

const cars=[
    car('lada', '2104', 1984, '75hp', 'img/2104.jpg'),
    car('lada', '2107', 1982, '73hp', 'img/2107.jpg'),
    car('lada', '2110', 1996, '72hp', 'img/2110.jpg'),
    car('uaz', '469', 1972, '75hp', 'img/469.jpg'),
    car('gaz', '31105', 2003, '100-178hp', 'img/31105.jpg'),
    car('moskvich', '2140', 1976, '75hp', 'img/2140.jpg'),
    car('niva', '2121', 1977, '83hp', 'img/2121.jpg'),
    car('lada', 'revolution', 2003, '165-215hp', 'img/revolution.jpg'),
    car('oka', '11113', 1988, '33p', 'img/11113.jpg'),
    car('gaz', '13', 1959, '195hp', 'img/13.jpg')
]

new Vue({
    el:'#index',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        search: ''
    },
    methods: {
        selectCar(car, index) {
            this.car = car
            this.selectedCarIndex = index
        }
    },
    computed: {
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    }
})
