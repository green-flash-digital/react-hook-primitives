// global.d.ts
export type {};

declare global {
  interface Window {
    __rhp_toasts: Map<string, Record<string, unknown>>;
  }
}
