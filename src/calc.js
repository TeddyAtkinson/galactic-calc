export class UserInfo {
  constructor(currAge, male) {
    this.currAge = currAge;
    this.male = male;
    this.murcAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;
    this.lifespan = 0;
    this.lifeLeftMurc = 0;
    this.lifeLeftVenus = 0;
    this.lifeLeftMars = 0;
    this.lifeLeftJup = 0;
  }

  planetCalc() {
    this.murcAge = (this.currAge / .24).toPrecision(4);
    this.venusAge = (this.currAge / .62).toPrecision(4);
    this.marsAge = (this.currAge / 1.88).toPrecision(4);
    this.jupAge = (this.currAge / 11.86).toPrecision(4);
  }
  lifespanCalc() {
    if(this.male === true) { 
      this.lifespan = 76;
    }
    else {
      this.lifespan = 81;
    }
    this.lifeLeftMurc = (this.lifespan - this.murcAge);
    this.lifeLeftVenus = (this.lifespan - this.venusAge);
    this.lifeLeftMars = (this.lifespan - this.marsAge);
    this.lifeLeftJup = (this.lifespan - this.jupAge);
    if(this.lifeLeftMurc <= 0) {
      this.lifeLeftMurc = "You have out lived life expectancy by " + Math.abs(this.lifeLeftMurc).toPrecision(3) + " years.";
    }
    if(this.lifeLeftVenus <= 0) {
      this.lifeLeftVenus = "You have out lived life expectancy by " + Math.abs(this.lifeLeftVenus).toPrecision(3) + " years.";
    }
  }
}