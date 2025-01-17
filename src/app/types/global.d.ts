declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;

  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import {FunctionComponent, SVGProps} from 'react';

  const svg: FunctionComponent<SVGProps<SVGSVGElement>>;

  export default svg;
}

declare const __IS_DEV__: boolean;
