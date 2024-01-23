import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import login, { deviantArt } from "./login.ts";

Deno.test("Curated", async (t) => {
  await login();

  await t.step("should get featured tags", async () => {
    const result = await deviantArt.curated.tags();
    assert(Object.hasOwn(result, "results"));
  });
});
