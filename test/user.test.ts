import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login } from "./login.ts";

Deno.test("User", async (t) => {
  const deviantArt = await login();

  await t.step("should get friends", async () => {
    const result = await deviantArt.user.friends({ username: "fhilippe124" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should search friends", async () => {
    const result = await deviantArt.user.friendsSearch({
      query: "cool",
      username: "fhilippe124",
    });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get a profile", async () => {
    const result = await deviantArt.user.profile({ username: "fhilippe124" });
    assert(Object.hasOwn(result, "bio"));
  });

  await t.step("should get a status", async () => {
    const result = await deviantArt.user.status({
      statusid: "D3823052-6164-5685-1A5E-CE08705CA878",
    });
    assert(Object.hasOwn(result, "is_deleted"));
  });

  await t.step("should get statuses", async () => {
    const result = await deviantArt.user.statuses({ username: "fhilippe124" });
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get watchers", async () => {
    const result = await deviantArt.user.watchers({ username: "fhilippe124" });
    assert(Object.hasOwn(result, "results"));
  });
});
