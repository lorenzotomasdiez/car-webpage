import {SettingsState} from './';


type SettingsActionType = 
| { type: '[Settings] - Toggle Mode' }
| { type: '[Settings] - Select Mode', payload:'light' | 'dark' }


export const settingsReducer = (state: SettingsState, action: SettingsActionType ):SettingsState => {

  switch(action.type) {
    case '[Settings] - Toggle Mode':
      return{
          ...state,
          mode: state.mode === 'light' ? 'dark' : 'light'
      }
        
    case '[Settings] - Select Mode':
      return{
        ...state,
        mode:action.payload
      }
    default:
      return state;
  }

}