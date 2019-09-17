/**
 * 模拟实现 react-redux
 * `npm i -S @lxfriday/react-redux`
 */

import React, { createContext, useContext, useReducer, useEffect } from 'react'
// 贯穿 App 的 context
const ReactReduxContext = createContext(null)

/**
 * 它会被当成一个 React 组件
 */
export function Provider({ store, children }) {
  return <ReactReduxContext.Provider value={store}>{children}</ReactReduxContext.Provider>
}

const initStateUpdates = () => [null, 0]
function storeStateUpdatesReducer(state, action) {
  console.log('storeStateUpdatesReducer', state, action)

  const [, updateCount] = state
  return [action.payload, updateCount + 1]
}

/**
 * 这是一个 HOC
 * connect 源码的实现非常复杂，Dan 写过一个简单实例
 * @link https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  // 用法 @connect(state => xxx, (dispatch) => xxx)(Comp)
  return function(WrappedComponent) {
    // 组件
    function ConnectFunc(props) {
      const store = useContext(ReactReduxContext)
      const [, forceComponentUpdateDispatch] = useReducer(storeStateUpdatesReducer, null, initStateUpdates)
      const state = store.getState()
      // 订阅 dispatch 行为
      useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          forceComponentUpdateDispatch({
            type: '@@redux/STORE_UPDATED',
            payload: {
              latestStoreState: state,
            },
          })
        })
        return () => {
          unsubscribe()
        }
      })

      return <WrappedComponent {...props} {...mapStateToProps(state, props)} {...mapDispatchToProps(store.dispatch, props)} />
    }

    // WrappedComponent 的属性拷贝过来
    return ConnectFunc
  }
}
