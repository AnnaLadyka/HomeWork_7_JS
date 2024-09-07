// «Объекты»

let Car = function(brand, carNumber) {
    this.brand = brand;
    this.carNumber = carNumber;
    this.engine = false;
    this.gear = 'parking';
    this.speed = 0;
    this.distanceTravelled = 0;

    this.engineOn = function() {
        this.engine = true;
        console.log('Двигатель включен')
    }

    this.engineOff = function() {
        this.engine = false;
        this.speed = 0;
        console.log('Двигатель выключен')
    }

    this.setGear = function(gear) {
        if (this.engine) {
            if (['parking', 'forward', 'reverse', 'neutral'].includes(gear)) {
                this.gear = gear;
                console.log(`Передача переключена на '${gear}'`);
            } else {
                console.log('Двигатель выключен. Сначала запустите двигатель');
            }
        }
    }

    this.accelerate = function(speed) {
        if (this.engine && this.gear === 'forward') {
            this.speed += speed;
            console.log(`Текущая скорость: ${this.speed} км/ч`);
        } else if (this.engine && this.gear === 'reverse') {
            this.speed += speed;
            console.log(`Вы двигаетесь назад. Текущая скорость: ${this.speed} км/ч`);
        }
        else {
            console.log('Двигатель выключен или проверьте текущую передачу');
        }
    }

    this.move = function(hours) {
        let distance
        if (this.engine && this.speed > 0) {
            distance = this.speed * hours;
            this.distanceTravelled += distance;
            console.log(`Автомобиль проехал ${distance} км. Общая дистанция: ${this.distanceTravelled} км.`);
        } else {
            console.log(`Автомобиль не движется.`);
        }
    }

    this.getStatusCar = function() {
        return {
            МаркаАвто: this.brand,
            НомерАвто: this.carNumber,
            Двигатель: this.engine,
            Передача: this.gear,
            Скорость: this.speed,
            ПройденноеРасстояние: this.distanceTravelled
        };
    }
}

let Auto = new Car('Honda', '4444MT4');
let status = Auto.getStatusCar();