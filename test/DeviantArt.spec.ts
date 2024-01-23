import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import login, { deviantArt } from "./login.ts";

Deno.test("DeviantArt", async (t) => {
  await login();

  await t.step("should extend API Deviations", async () => {
    const result = await deviantArt.deviation.get({
      deviationid: "1FA35A6D-E2CD-3CDF-1A65-410AB577BF10",
    });
    const extended = await deviantArt.extendDeviations([result]);
    assert(Object.hasOwn(extended[0], "description"));
  });

  await t.step("should extend RSS Deviations", async () => {
    const result = await deviantArt.rss.search("anime", 10, "popular");
    const extended = await deviantArt.extendRSSDeviations(result);
    assert(Object.hasOwn(extended[0], "profile_pic"));
  });
});
