import { FC, PropsWithChildren } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { ROUTES } from '../../common';
import classes from './Container.module.sass';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const isMain = pathname === ROUTES.MAIN;

  return (
    <main className={classes.main}>
      <div className={classes.container}>{children}</div>
      {isMain && (
        <nav className={classes.nav}>
          {Object.values(ROUTES)
            .filter((route) => !([ROUTES.MAIN, ROUTES.ANY] as unknown[]).includes(route))
            .map((route) => (
              <Link className={classes.link} key={route} to={route}>
                {route.slice(1)}
              </Link>
            ))}
        </nav>
      )}
      {!isMain && (
        <Link className={classes.link} to={ROUTES.MAIN}>
          Go to main page
        </Link>
      )}
    </main>
  );
};
