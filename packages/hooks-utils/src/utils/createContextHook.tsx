import React, { createContext, useContext } from 'react'

export interface ContainerProviderProps<State = void> {
  initialState?: State
}

const EMPTY: unique symbol = Symbol('__EMPTY__')

export const createContextHook = <Value, State = void>(
  useHook: (initialState?: State) => Value,
  errorMsg = 'Component must be wrapped with <Container.Provider />',
) => {
  const Context = createContext<Value | typeof EMPTY>(EMPTY)

  const Provider: React.FC<ContainerProviderProps<State>> = ({ initialState, children }) => {
    const value = useHook(initialState)
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useContextHook = (): Value => {
    const value = useContext(Context)
    if (value === EMPTY) {
      throw new Error(errorMsg)
    }
    return value
  }

  return [Provider, useContextHook]
}
