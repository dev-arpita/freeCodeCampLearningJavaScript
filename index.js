class Thermostat{
  constructor(fahrenheit){
    this._celsius = 5/9 * (fahrenheit -32)
  }
  get temperature() {
    return this._celsius
  }
  set temperature(celsius) {
    return this._celsius = celsius
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

