import React, { createContext, useState } from 'react';

type LoaderType = {
  loading: boolean;
}

type PropsLoaderContext = {
  stateLoader: LoaderType;
  setStateLoader: React.Dispatch<React.SetStateAction<LoaderType>>;
}

const DEFAULT_VALUE = {
  stateLoader: {
    loading: true
  },
  setStateLoader: () => { }
}

const LoaderContext = createContext<PropsLoaderContext>(DEFAULT_VALUE);

const LoaderContextContextProvider = ({ children }: any) => {
  const [stateLoader, setStateLoader] = useState(DEFAULT_VALUE.stateLoader)

  return (
    <LoaderContext.Provider value={{ stateLoader, setStateLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}

export { LoaderContextContextProvider };
export default LoaderContext