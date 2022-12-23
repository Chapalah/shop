import { useEffect, useState } from 'react';

const useIsFirstLoading = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  useEffect(() => {
    setIsFirstLoading(false);
  }, []);

  return isFirstLoading;
}

export default useIsFirstLoading;