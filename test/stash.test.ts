import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login, env } from "./login.ts";

Deno.test("Stash", async (t) => {
  const deviantArt = await login();

  await t.step("should get a stash", async () => {
    const result = await deviantArt.stash.get({ stackid: "" });
    assert(Object.hasOwn(result, "title"));
  });

  await t.step("should get an item", async () => {
    const result = await deviantArt.stash.item({ itemid: "" });
    assert(Object.hasOwn(result, "title"));
  });
});
