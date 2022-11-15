import { UserInfo } from "../src/calc";

describe("UserInfo", () => {
  test("Store current age of user input", () =>{
    let user1 = new UserInfo("20");
    expect(user1.currAge).toEqual("20");
  });
  test("Output planetary age of user input", () => {
    let user1 = new UserInfo("20");
    user1.planetCalc();
    expect(user1.murcAge).toEqual("83.33");
  });
  test("Set lifespan average when male", () => {
    let user1 = new UserInfo("20", true);
    user1.lifespanCalc();
    expect(user1.lifespan).toEqual(76);
  });
  test("Set lifespan average when female", () => {
    let user1 = new UserInfo("20", false);
    user1.lifespanCalc();
    expect(user1.lifespan).toEqual(81);
  });
  test("Sets life left according to lifespan average", () => {
    let user1 = new UserInfo("20", true);
    user1.planetCalc();
    user1.lifespanCalc();
    expect(user1.lifeLeftJup).toEqual(74.314);
  });
  test("Outliving the average lifespan on another planet", () => {
    let user1 = new UserInfo("90", true);
    user1.planetCalc();
    user1.lifespanCalc();
    expect(user1.lifeLeftMurc).toEqual("You have out lived life expectancy by " + 299 + " years.");
    expect(user1.lifeLeftVenus).toEqual("You have out lived life expectancy by " + 69.2 + " years.");
  });
});