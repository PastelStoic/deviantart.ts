import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login } from "./login.ts";

Deno.test("Util", async function (t) {
  const deviantArt = await login();

  await t.step("should get the access token status", async () => {
    const result = await deviantArt.util.placebo();
    assert(Object.hasOwn(result, "status"));
  });
});
