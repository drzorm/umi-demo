/* eslint-disable spaced-comment */
declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg" {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
declare const ENV: string;

declare interface Window {
  KEY: string;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production";
    SERVER_PATH: string;
  }
}
