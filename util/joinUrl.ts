type Paths = string | number | null | undefined;

export function joinUrl(...args: Paths[]) {
  return args
    .filter(Boolean)
    .map((url, index) => {
      const path = `${url}`.toString();
      if (index === 0) return path.replace(/(?!^\/$)\/+$/g, "");
      return path.replace(/^\/{1,}|\/{1,}$/g, "");
    })
    .filter(Boolean)
    .join("/")
    .replace(/(?<!http:|https:)\/{2,}/g, "/");
}
