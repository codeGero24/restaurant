import React from 'react';

// - Types
import { Tab } from '@types.app/data';

export interface TabsProps<T> {
  tabs: T[];
  variant: 'info';
  className?: string;
}

const TabInfo = React.lazy(() => import('./TabInfo'));

const Tabs = React.memo<TabsProps<Tab>>(({ className, variant, tabs }) => {
  const classNameCustom = className || 'grid grid-cols-1 md:grid-cols-3';

  const TabComponent = React.useMemo(() => {
    switch (variant) {
      case 'info':
        return TabInfo;

      default:
        return;
    }
  }, [variant]);

  return (
    <ul className={classNameCustom}>
      {tabs.map((tab, index) => (
        <React.Suspense key={`tab-${index}`} fallback={<></>}>
          {TabComponent && <TabComponent {...tab} />}
        </React.Suspense>
      ))}
    </ul>
  );
});
export default Tabs;
