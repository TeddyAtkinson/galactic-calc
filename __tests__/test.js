import { UserInfo } from "../src/calc";

describe("UserInfo", () => {
  test("store current age of user input", () =>{
    let user1 = new UserInfo("20");
    expect(user1.currAge).toEqual("20");
  });
});