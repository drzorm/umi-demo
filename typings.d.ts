/* eslint-disable spaced-comment */
declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg" {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

type BIZ_ENV = "dev" | "test" | "prod";
type NODE_ENV = "development" | "test" | "production";

declare const ENV: BIZ_ENV;
declare const SERVER_PATH: string;

declare interface Window {
  key: string;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    BIZ_ENV: BIZ_ENV;
    NODE_ENV: NODE_ENV;
  }
}
