import {createContext} from 'react'; 


interface ContextProps {
  mode          :'light' | 'dark';

  toggleMode    :() => void;
  selectMode    :(string:'light' | 'dark') => void;
}


export const SettingsContext = createContext({} as ContextProps);