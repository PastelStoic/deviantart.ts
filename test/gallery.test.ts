import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import login, { deviantArt } from "./login.ts";

Deno.test("Gallery", async (t) => {
  await login();

  await t.step("should get all deviations of a user", async () => {
    const result = await deviantArt.gallery.all({ username: "fhilippe124" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get all folders of a user", async () => {
    const result = await deviantArt.gallery.folders({
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get a folder", async () => {
    const result = await deviantArt.gallery.get({
      folderid: "79216EF7-CED7-6973-DD90-6793348AD2A4",
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "results"));
  });
});
