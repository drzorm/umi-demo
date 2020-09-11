/* eslint-disable spaced-comment */
declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg" {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

type ENV = "development" | "production" | "test";

declare const ENV: ENV;
declare const SERVER_PATH: string;

declare interface Window {
  key: string;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: ENV;
    SERVER_PATH: string;
  }
}
