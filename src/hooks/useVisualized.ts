import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function useVisualized() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [visualized, setVisualized] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setVisualized(inView);
    }
  }, [inView]);

  return { ref, visualized };
}
