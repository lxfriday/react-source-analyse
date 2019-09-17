/**
 * redux 模拟实现
 */

// 初始化 redux 中的数据
const REDUX_INIT = '@@redux/INIT'

/**
 * 状态树创建的地方，返回 getState、subscribe、dispatch
 *
 * @param {*} reducer
 * @param {*} enhancer
 */
export function createStore(reducer, enhancer) {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer)
  }

  let currentState
  let currentReducer = reducer
  let listeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    // 闭包，reducer 返回的 state 会是新的 state
    currentState = currentReducer(currentState, action)

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
    return action
  }

  // 这个很重要，初始情况下，把 reducer 中的数据挂到 currentState 中
  dispatch({ type: REDUX_INIT })

  function subscribe(listener) {
    // 把传进来的订阅函数推入 listeners 数组
    listeners.push(listener)
    // 返回的取消订阅的函数
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      // 删除订阅器
      listeners.splice(index, 1)
    }
  }

  return {
    getState, // 获取 state
    dispatch, // 触发数据变更
    subscribe, // 刷新 connect 组件的时候用到 dispatch 之后触发视图强制渲染
  }
}

/**
 * 组合 reducer 的函数，处理有多个 reducer 的时候如何把它们组合成一个大 reducer，
 * 其实就是把 action 分发到每个 reducer，匹配对应的一个 switch，然后返回一个新的 state
 * 所有的 reducer 函数都符合 `function (state, action)` 签名
 */
export function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  return function combination(state = {}, action) {
    const nextState = {}
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i] // reducer 函数名
      const reducer = reducers[key] // 当前的 reducer 函数
      const previousStateForKey = state[key] // 调用 reducer 之前的 state
      // 这句的调用有前提，reducer 函数内 switch case 语句 必须有 default 条件，要返回传入的 state
      // 这样就表示 reducer 调用没有更改 state
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }

    // 如果发生了变更，大 state 也会返回新生成的 state
    return nextState
  }
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

export function applyMiddleware(...middleware) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error('暂时不能调用')
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
    }

    const chains = middleware.map(m => m(middlewareAPI))
    dispatch = compose(...chains)(store.dispatch)

    return {
      ...store,
      dispatch,
    }
  }
}
