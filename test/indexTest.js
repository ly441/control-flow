// Import the variables from index.js
const {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
} = require("../index.js");

// Import Mocha's describe and it functions
const { describe, it } = require("mocha");
// Import Chai's expect function for assertions
const { expect } = require("chai");

// Write your tests
describe("currentUser", () => {
  it("is defined", () => {
    expect(currentUser).to.not.be.undefined;
  });

  it("is a string", () => {
    expect(currentUser).to.be.a("string");
  });
});

describe("welcomeMessage", () => {
  it("is defined", () => {
    expect(welcomeMessage).to.not.be.undefined;
  });

  it("contains the currentUser", () => {
    expect(welcomeMessage).to.include(currentUser);
  });

  it("ends with an exclamation point", () => {
    expect(welcomeMessage.endsWith("!")).to.be.true;
  });
});

describe("excitedWelcomeMessage", () => {
  it("is defined", () => {
    expect(excitedWelcomeMessage).to.not.be.undefined;
  });

  it("is in uppercase", () => {
    expect(excitedWelcomeMessage).to.equal(welcomeMessage.toUpperCase());
  });
});

describe("shortGreeting", () => {
  it("is defined", () => {
    expect(shortGreeting).to.not.be.undefined;
  });

  it('contains "Welcome, "', () => {
    expect(shortGreeting).to.include("Welcome, ");
  });

  it("contains the first initial of the name stored in the currentUser variable", () => {
    expect(shortGreeting).to.include(currentUser.slice(0, 1));
  });
});
