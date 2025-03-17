const { expect } = require("chai");

const {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip,
} = require("../index.js");

describe("index.js", function () {
  describe("scuberGreetingForFeet()", function () {
    it("gives customers a free sample if the ride is less than or equal to 400 feet", function () {
      expect(scuberGreetingForFeet(199)).to.equal("This one is on me!");
    });

    it("charges 20 bucks for a distance between 400 and 2000 feet", function () {
      expect(scuberGreetingForFeet(1500)).to.equal(
        "That will be twenty bucks."
      );
    });

    it("charges 30 bucks for a distance between 2000 and 2500 feet", function () {
      expect(scuberGreetingForFeet(2200)).to.equal(
        "I will gladly take your thirty bucks."
      );
    });

    it("does not allow rides over 2500 feet", function () {
      expect(scuberGreetingForFeet(2600)).to.equal("No can do.");
    });
  });

  describe("ternaryCheckCity()", function () {
    it("returns 'Ok, sounds good.' when the city is NYC", function () {
      expect(ternaryCheckCity("NYC")).to.equal("Ok, sounds good.");
    });

    it("returns 'No go.' if the city is not NYC", function () {
      expect(ternaryCheckCity("Los Angeles")).to.equal("No go.");
    });
  });

  describe("switchOnCharmFromTip()", function () {
    it("returns 'Thank you so much.' when the tip is generous", function () {
      expect(switchOnCharmFromTip("generous")).to.equal("Thank you so much.");
    });

    it("returns 'Thank you.' when the tip is not as generous", function () {
      expect(switchOnCharmFromTip("not as generous")).to.equal("Thank you.");
    });

    it("returns 'Bye.' for any other input", function () {
      expect(switchOnCharmFromTip("average")).to.equal("Bye.");
    });
  });
});
