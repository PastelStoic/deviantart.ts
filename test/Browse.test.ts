import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { env, login } from "./login.ts";

Deno.test("Browse", async (t) => {
  const deviantArt = await login();

  await t.step("should get daily deviations", async () => {
    const result = await deviantArt.browse.daily({
      date: "2019-07-03",
      expand: "user.watch",
      mature_content: true,
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get hot deviations", async () => {
    const result = await deviantArt.browse.hot.get({
      category_path: "/digitalart",
      offset: 1,
      limit: 20,
      mature_content: true,
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get more like this", async () => {
    const result = await deviantArt.browse.moreLikeThis.get({
      seed: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get more like this previews", async () => {
    const result = await deviantArt.browse.moreLikeThisPreview({
      seed: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "author"));
  });

  await t.step("should get newest deviations", async () => {
    const result = await deviantArt.browse.newest.get({ q: "anime" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get popular deviations", async () => {
    const result = await deviantArt.browse.popular.get({ q: "anime" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get deviations from a tag", async () => {
    const result = await deviantArt.browse.tag.get({ tag: "kawaii" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get tag searches", async () => {
    const result = await deviantArt.browse.tagSearch({ tag_name: "cute" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get undiscovered deviations", async () => {
    const result = await deviantArt.browse.undiscovered.get({});
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get user journals", async () => {
    const result = await deviantArt.browse.userJournals.get({
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "results"));
  });
});
