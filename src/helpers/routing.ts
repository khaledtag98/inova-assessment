export const buildURLQueryParams = (
  queryParams: Record<string, string | string[] | null | undefined>
): string => {
  const urlParams = new URLSearchParams();

  for (const key in queryParams) {
    if (queryParams[key] && typeof queryParams[key] !== "object") {
      urlParams.append(key, queryParams[key] as string);
    } else if (
      queryParams[key] instanceof Array &&
      queryParams[key].length > 0
    ) {
      urlParams.append(key, queryParams[key].join(","));
    }
  }

  return urlParams.toString();
};
