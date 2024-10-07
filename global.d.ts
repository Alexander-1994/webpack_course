declare module '*.module.sass' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;

  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __PLATFORM__: 'desktop' | 'mobile';
