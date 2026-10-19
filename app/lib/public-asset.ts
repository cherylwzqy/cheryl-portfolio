/** Prefix public assets only for the GitHub Pages build. Route links use Next's router. */
export function publicAsset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
