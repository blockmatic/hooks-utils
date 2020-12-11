import React from 'react'

export interface ContainerProviderProps<State = void> {
  initialState?: State
}
export type Container<Value, State = void> = [() => Value, React.ComponentType<ContainerProviderProps<State>>]

const EMPTY: unique symbol = Symbol('__EMPTY__')

export const createContextHook = <Value, State = void>(
  useHook: (initialState?: State) => Value,
  errorMsg = 'Hook must be wrapped with <Provider/>',
): Container<Value, State> => {
  const Context = React.createContext<Value | typeof EMPTY>(EMPTY)

  const Provider: React.FC<ContainerProviderProps<State>> = ({ initialState, children }) => {
    const value = useHook(initialState)
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useContainer = (): Value => {
    const value = React.useContext(Context)
    if (value === EMPTY) {
      throw new Error(errorMsg)
    }
    return value
  }

  return [useContainer, Provider]
}
