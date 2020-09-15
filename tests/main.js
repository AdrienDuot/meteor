import assert from "assert";
import "../imports/api/tasks.tests.js";
import "./outisde.tests.js"
require ("./time.tests")

describe("simple-todos-vue", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "simple-todos-vue");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});



