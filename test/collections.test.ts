import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login, env } from "./login.ts";

Deno.test("Collections", async (t) => {
  const deviantArt = await login();

  await t.step("should get all user folders", async () => {
    const result = await deviantArt.collections.folders({
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get all all deviations in a collection", async () => {
    const result = await deviantArt.collections.get({
      folderid: "79216EF7-CED7-6973-DD90-6793348AD2A4",
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "results"));
  });
});
