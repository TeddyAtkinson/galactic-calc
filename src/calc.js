export class UserInfo {
  constructor(currAge) {
    this.currAge = currAge;
    this.murcAge = (currAge / .24);
    this.venusAge = (currAge / .62);
    this.marsAge = (currAge / 1.88);
    this.jupAge = (currAge / 11.86);
  }

  planetCalc(currAge) {
    // this.murcAge = (currAge / .24);
    // this.venusAge = (currAge / .62);
    // this.marsAge = (currAge / 1.88);
    // this.jupAge = (currAge / 11.86);
  }
}