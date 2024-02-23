const apiURL = "https://www.deviantart.com/";

/**
 * Used internally to get the access token in [[login]]
 */
export async function apiGetNoLogin(
  endpoint: string,
  params: Record<string, string | number | boolean | undefined>,
) {
  const url = new URL(apiURL + endpoint);
  for (const pair of Object.entries(params)) {
    if (pair[1] !== undefined) {
      url.searchParams.set(pair[0], pair[1].toString());
    }
  }
  const result = await fetch(url).then(async (
    r,
  ) => await r.json());
  return result;
}

/**
 * Gets an endpoint from the DeviantArt api.
 */
export async function apiGet(
  endpoint: string,
  accessToken: string,
  args?: {
    params: Record<string, string | number | boolean | undefined | string[]>;
  },
) {
  const url = new URL(apiURL + endpoint);

  url.searchParams.set("access_token", accessToken);
  if (args) {
    for (const pair of Object.entries(args.params)) {
      if (pair[1] !== undefined) {
        if (Array.isArray(pair[1])) {
          for (const item of pair[1]) {
            url.searchParams.append(pair[0] + "[]", item.toString());
          }
        } else {
          url.searchParams.append(pair[0], pair[1].toString());
        }
      }
    }
  }

  const result = await fetch(url).then((
    r,
  ) => r.json());
  return result;
}
