import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import login, { deviantArt, env } from "./login.ts";

Deno.test("Deviation", async (t) => {
  await login();

  await t.step("should get a deviation", async () => {
    const result = await deviantArt.deviation.get({
      deviationid: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "printid"));
  });

  await t.step("should get a deviation's content", async () => {
    const result = await deviantArt.deviation.content({
      deviationid: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "html"));
  });

  await t.step("should get the file download", async () => {
    const result = await deviantArt.deviation.download({
      deviationid: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "filesize"));
  });

  await t.step("should get embedded content", async () => {
    const result = await deviantArt.deviation.embeddedContent({
      deviationid: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get metadata", async () => {
    const result = await deviantArt.deviation.metaData({
      deviationids: [env.DEVIANTART_TEST_DEVIATION_CONTENT],
    });
    assert(Object.hasOwn(result, "metadata"));
  });

  await t.step("should get who faved", async () => {
    const result = await deviantArt.deviation.whoFaved({
      deviationid: env.DEVIANTART_TEST_DEVIATION_CONTENT,
    });
    assert(Object.hasOwn(result, "results"));
  });
});
