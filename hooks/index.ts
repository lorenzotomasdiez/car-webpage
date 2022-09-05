import { useContext } from "react";
import { SettingsContext } from "../context";
import useOffSetTop from './useOffSetTop';

export const useSettings = () => useContext(SettingsContext);
export {default as useResponsive} from './useResponsive';
export {default as useOffSetTop} from './useOffSetTop';