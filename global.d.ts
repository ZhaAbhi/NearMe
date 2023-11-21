// In a global.d.ts or somewhere similar
declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}
