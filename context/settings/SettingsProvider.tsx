import { FC, ReactNode, useReducer} from 'react';
import { SettingsContext, settingsReducer} from './';
import Cookies from 'js-cookie';

export interface SettingsState{
  mode    :'light' | 'dark';
}

const Settings_INITIAL_STATE: SettingsState = {
  mode: 'light',
}

interface Props{
    children?: ReactNode
}

export const SettingsProvider:FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(settingsReducer, Settings_INITIAL_STATE);
  
  const toggleMode = () => {
    Cookies.set('themeMode', state.mode === 'light' ? 'dark' : 'light');
    dispatch({type: '[Settings] - Toggle Mode'})
  }

  const selectMode = (mode:'light' | 'dark') => {
    Cookies.set('themeMode', mode);
    dispatch({type: '[Settings] - Select Mode', payload: mode})
  }

  return (
    <SettingsContext.Provider value={{
      ...state,

      toggleMode,
      selectMode,
    }}>
      { children}
    </SettingsContext.Provider>
  )
};