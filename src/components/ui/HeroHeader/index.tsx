import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroHeaderHome from './HeroHeaderHome';
import HeroHeaderOther from './HeroHeaderOther';
import { findPage } from '@utils/pages';
import './HeroHeader.scss';

export default function HeroHeader() {
  const location = useLocation();

  const heroHeader = React.useMemo(() => {
    if (location.pathname === '/') {
      return <HeroHeaderHome />;
    }

    const curentPage = findPage(location.pathname);
    return <HeroHeaderOther {...curentPage} />;
  }, [location.pathname]);

  return <>{heroHeader}</>;
}
