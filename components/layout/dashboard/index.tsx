import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";

interface Props{
  children:ReactNode;
}

export default function DashboardLayout({children}:Props){
  return(
  <Stack sx={{minHeight:1}}>
    {/* <MainHeader/> */}
    {children}
    <Box sx={{flexGrow:1}}/>
    {/* <MainFooter /> */}
  </Stack>
  )
}