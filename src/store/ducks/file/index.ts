import { createAction, createReducer, ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

export const getFile: ActionCreatorWithoutPayload = createAction('fetchAssets')

const initialState = {
  file: [] as any
}

const reducer = createReducer(initialState, {
  [getFile.type]: (state: any) => {
    console.log(state)
  }
})

// export * from './selectors'
export default reducer
