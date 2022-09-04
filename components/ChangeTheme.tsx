import { FC } from "react";
import { useSettings } from '../hooks/index';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { Button } from "@mui/material";

interface Props{
  color?  :string;
  isOffset:boolean;
}
export const ChangeTheme:FC<Props> = ({color, isOffset}) => {
  const {mode, toggleMode} = useSettings();
  const isLight = mode === 'light';


  let currentColor:string;
  if(!color){
    currentColor = isOffset && isLight ? 'common.black' : 'common.white';
  }else{
    currentColor = color;
  }


  return (
    <Button onClick={toggleMode}>
      {isLight ? <LightModeIcon /> : <NightlightRoundIcon/> }
    </Button>
  )
}