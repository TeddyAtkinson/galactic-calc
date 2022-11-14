export class UserInfo {
  constructor(currAge) {
    this.currAge = currAge;
    this.murcAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;
  }

  planetCalc() {
    this.murcAge = (this.currAge / .24).toPrecision(4);
    this.venusAge = (this.currAge / .62).toPrecision(4);
    this.marsAge = (this.currAge / 1.88).toPrecision(4);
    this.jupAge = (this.currAge / 11.86).toPrecision(4);
  }
}