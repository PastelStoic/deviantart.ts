import DeviantArt from "../deviantart.ts";
import { load } from "https://deno.land/std@0.212.0/dotenv/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const loadedEnv = await load();

const envSchema = z.object({
  DEVIANTART_CLIENT_ID: z.string(),
  DEVIANTART_CLIENT_SECRET: z.string(),
});

export const env = await envSchema.parseAsync(loadedEnv);

let deviantArt: DeviantArt;

export default async () => {
  if (!deviantArt) {
    deviantArt = await DeviantArt.login(
      env.DEVIANTART_CLIENT_ID,
      env.DEVIANTART_CLIENT_SECRET,
    );
  }
};

export { deviantArt };
