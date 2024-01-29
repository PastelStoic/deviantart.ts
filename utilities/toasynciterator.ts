export async function* toAsyncIterator<Tin extends { offset?: number }, Tres>(
  input: Tin,
  pagenated: (input: Tin) => Promise<PaginationResults<Tres>>,
) {
  let nextOffset: number | null = 0;
  if (nextOffset !== null) {
    input.offset = nextOffset;
    const res = await pagenated(input);
    nextOffset = res.next_offset;
    yield res.results;
  }
}

type PaginationResults<T> = {
  results: T;
  next_offset: number | null;
  has_more: boolean;
};
