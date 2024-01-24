import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login, env } from "./login.ts";

Deno.test("Stash", async (t) => {
  const deviantArt = await login();

  if (env.DEVIANTART_TEST_STASH_STACK_ID) {
    await t.step("should get a stash", async () => {
      const result = await deviantArt.stash.get({ stackid: env.DEVIANTART_TEST_STASH_STACK_ID! });
      assert(Object.hasOwn(result, "title"));
    });
  }

  if (env.DEVIANTART_TEST_STASH_ITEM_ID) {
    await t.step("should get an item", async () => {
      const result = await deviantArt.stash.item({ itemid: env.DEVIANTART_TEST_STASH_ITEM_ID! });
      assert(Object.hasOwn(result, "title"));
    });
  }
});
