declare module '*.css';
declare module '*.less';
declare module "*.png";
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare interface Window {
  key: string;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "test" | "production";

    BIZ_ENV: "local" | "dev" | "test" | "prod";
    SERVER_PATH: string;
  }
}
