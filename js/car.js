/*

file name: car.js

constructor(position, game, sprite_name)

list methods:
spawn()
move()
forward()
backward()
left()
right()
stop()
*/

class Car {
    constructor(position, game, sprite_name) {
        // create Phaser.Sprite 
        this.sprite = game.add.sprite(position.x, position.y, sprite_name);
        this.sprite.height = 64;
        this.sprite.anchor.set(0.5);
        // object consist all info about speed
        this.speed_info = {
            a: 1.5,
            max_speed: 600.0,
            min_speed: 200.0,
            speed: 0.0,
            speed_inc: () => this.speed_info.speed += this.speed_info.a,
            speed_dec: () => this.speed_info.speed -= this.speed_info.a,
            reset: () => this.speed_info.speed = 0.0
        };
        // current wheels directons
        this.WHEEL_DIRECTION_CONSTANTS = {
            WHEELS_LEFT: -1,
            WHEELS_RIGHT: 1,
            WHEELS_MIDDLE: 0
        };
        // constants forward or backward move car
        this.CAR_DIRECTION_CONSTANTS = {
            FORWARD: 1,
            BACKWARD: -1,
            NONE: 0
        };
        // object consist DIRECTION WHEELS AND DIRECTION CAR
        this.direction = {
            wheels: this.WHEEL_DIRECTION_CONSTANTS.WHEELS_MIDDLE,
            car: this.CAR_DIRECTION_CONSTANTS.NONE
        };

    }
    spawn(position) {
        // set default position 
        this.sprite.position.x = position.x;
        this.sprite.position.y = position.y;
        // set default speed
        this.speed_info.reset();
        // set default dirrection
         this.direction = {
            wheels: this.WHEEL_DIRECTION_CONSTANTS.WHEELS_MIDDLE,
            car: this.CAR_DIRECTION_CONSTANTS.NONE
        };
    }
    forward() {
        this.speed_info.speed_inc();
        this.direction.car = this.CAR_DIRECTION_CONSTANTS.FORWARD;
    }
    backward() {
        this.speed_info.speed_dec();
        this.direction.car = this.CAR_DIRECTION_CONSTANTS.BACKWARD;
    }
    left() {
        this.direction.wheels = this.WHEEL_DIRECTION_CONSTANTS.WHEELS_LEFT;
    }
    right() {
        this.direction.wheels = this.WHEEL_DIRECTION_CONSTANTS.WHEELS_RIGHT;
    }
    stop() {
        this.speed_info.reset();
        this.direction.car = this.CAR_DIRECTION_CONSTANTS.NONE;
    }
}