import { createAction, createReducer, ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface IFile {
  name: string
  url: string
}

export interface IFileState {
  files: Array<IFile>
}

export interface ISetFile {
  files: Array<IFile>
}

export const setFile: ActionCreatorWithPayload<ISetFile> = createAction('setFile')
export const getFile: ActionCreatorWithoutPayload = createAction('getFile')

const initialState: IFileState = {
  files: []
}

const reducer = createReducer(initialState, {
  [getFile.type]: (state: IFileState) => {
    console.log('GET FILE')
    console.log(state)
  },
  [setFile.type]: (state: IFileState, { payload: { files } }) => {
    console.log('SET FILE')
    console.log(state)
    state.files = files
  }
})

// export * from './selectors'
export default reducer
