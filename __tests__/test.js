import { UserInfo } from "../src/calc";

describe("UserInfo", () => {
  test("Store current age of user input", () =>{
    let user1 = new UserInfo("20");
    expect(user1.currAge).toEqual("20");
  });
  test("Output planetary age of user input", () => {
    let user1 = new UserInfo("20");
    expect(user1.murcAge).toEqual()
  });
});