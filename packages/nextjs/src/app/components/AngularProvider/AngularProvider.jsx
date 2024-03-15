import React, { useEffect } from 'react';
import { AngularInjectorContext } from 'angulareact';

function AngularProvider({ children }) {

  const [$injector, setInjector] = React.useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $injector = require('@angulareact-poc/angularjs-legacy').$injector;
      if (!$injector) {
        throw new Error('Angular injector not found');
      }
      setInjector($injector);
    }
  }, []);

  return (
    <AngularInjectorContext.Provider value={$injector}>
      {children}
    </AngularInjectorContext.Provider>
  )
}

export { AngularProvider };
