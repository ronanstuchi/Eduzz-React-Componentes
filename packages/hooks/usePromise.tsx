import * as React from 'react';

export default function usePromise<T>(promiseGenerator: () => Promise<T>, deps: React.DependencyList): [T, any] {
  const [result, setResult] = React.useState<T>();
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    let isSubscribed = true;

    promiseGenerator()
      .then(result => {
        if (!isSubscribed) return;
        setResult(result);
      })
      .catch(err => {
        if (!isSubscribed) return;
        setError(err);
      });

    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  return [result, error];
}
