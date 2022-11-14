export class UserInfo {
  constructor(currAge) {
    this.currAge = currAge;
    this.murcAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;
  }

  planetCalc(currAge) {
    this.murcAge = (currAge / .24);
    this.venusAge = (currAge / .62);
    this.marsAge = (currAge / 1.88);
    this.jupAge = (currAge / 11.86);
  }
}