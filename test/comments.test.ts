import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login } from "./login.ts";

Deno.test("Comments", async (t) => {
  const deviantArt = await login();

  await t.step("should get a deviations comments", async () => {
    const result = await deviantArt.comments.deviation({
      deviationid: "1FA35A6D-E2CD-3CDF-1A65-410AB577BF10",
    });
    assert(Object.hasOwn(result, "thread"));
    result.thread;
  });

  await t.step("should get comment replies", async () => {
    const result = await deviantArt.comments.siblings({
      commentid: "FE5A83B8-0495-9E1D-3A54-864D943D579C",
    });
    assert(Object.hasOwn(result, "thread"));
  });

  await t.step("should get comments on a profile", async () => {
    const result = await deviantArt.comments.profile({
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "thread"));
  });

  await t.step("should get comments on a status", async () => {
    const result = await deviantArt.comments.status({
      statusid: "D3823052-6164-5685-1A5E-CE08705CA878",
    });
    assert(Object.hasOwn(result, "thread"));
  });
});
