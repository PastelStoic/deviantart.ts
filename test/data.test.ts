import { assert } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { login, env } from "./login.ts";

Deno.test("Data", async (t) => {
  const deviantArt = await login();

  await t.step("should get countries", async () => {
    const result = await deviantArt.data.countries();
    assert(Object.hasOwn(result, "results"));
  });

  await t.step("should get the privacy policy", async () => {
    const result = await deviantArt.data.privacy();
    assert(Object.hasOwn(result, "text"));
  });

  await t.step("should get submission guidelines", async () => {
    const result = await deviantArt.data.submission();
    assert(Object.hasOwn(result, "text"));
  });

  await t.step("should get terms of service", async () => {
    const result = await deviantArt.data.tos();
    assert(Object.hasOwn(result, "text"));
  });
});
