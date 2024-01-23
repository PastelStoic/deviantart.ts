import DeviantArt from "../deviantart.ts";
import { load } from "https://deno.land/std@0.212.0/dotenv/mod.ts";
import { z } from "zod";

const loadedEnv = await load();

const envSchema = z.object({
  DEVIANTART_CLIENT_ID: z.string(),
  DEVIANTART_CLIENT_SECRET: z.string(),
  DEVIANTART_TEST_USER: z.string({ required_error: "Your env for testing must include the username of a known valid user." }),
  DEVIANTART_TEST_FOLDER: z.string({ required_error: "Your env for testing must include a known folder id." }),
  DEVIANTART_TEST_DEVIATION_CONTENT: z.string({ required_error: "Your env for testing must include the id of a literature or journal deviation." }),
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
