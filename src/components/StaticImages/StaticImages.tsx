// imports of regular images (not svg)
import reactLogoPath from '@/assets/react-logo.png';
import bridgePath from '@/assets/bridge.jpg';
// import svg image (works like a React component thanks to svgr-webpack-loader)
import ReactSvg from '@/assets/react.svg';

import classes from './StaticImages.module.sass';

type TImageItem = {
  path: string;
  text: string;
};

const ImageItem = ({ path, text }: TImageItem) => (
  <figure>
    <img className={classes.image} src={path} alt={text} />
    <figcaption className={classes.text}>{text}</figcaption>
  </figure>
);

export const StaticImages = () => (
  <div className={classes.images}>
    <ImageItem path={reactLogoPath} text="React logo" />
    <ImageItem path={bridgePath} text="Bridge" />
    <ReactSvg className={classes.svg} />
  </div>
);
