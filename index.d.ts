declare module 'fast-redux' {
  type NamespaceConfig = <RootType>(
    nameSpace: string,
    defaultValue: RootType
  ) => {
    getState: (state: any) => RootType
    action: <Arguments extends any[] = any>(
      actionName: string,
      actionFn: ReducerType<RootType, DispatchType<Arguments>>
    ) => DispatchType<Arguments>
  }

  type DispatchType<Arguments> = (...args: Arguments) => any

  type ReducerType<RootType = any, DispatchType extends (...args: any) => any = any> = (
    state: RootType,
    ...base: Parameters<DispatchType>
  ) => RootType

  export const namespaceConfig: NamespaceConfig

  export const rootReducer: (state: any, action: any) => any
}
