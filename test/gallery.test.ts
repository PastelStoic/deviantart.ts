import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { env, login } from "./login.ts";

Deno.test("Gallery", async (t) => {
  const deviantArt = await login();

  await t.step("should get all deviations of a user", async () => {
    const result = await deviantArt.gallery.all.get({
      username: env.DEVIANTART_TEST_USER,
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("async iterator should work", async () => {
    for await (
      const result of deviantArt.gallery.all.toAsyncIterator({
        username: env.DEVIANTART_TEST_USER,
      })
    ) {
      assert(Object.hasOwn(result, "deviationid"));
    }
  });

  await t.step("should get all folders of a user", async () => {
    const result = await deviantArt.gallery.folders({
      username: env.DEVIANTART_TEST_USER,
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get a folder", async () => {
    const result = await deviantArt.gallery.get({
      folderid: env.DEVIANTART_TEST_FOLDER,
    });
    assert(Object.hasOwn(result, "results"));
  });
});
