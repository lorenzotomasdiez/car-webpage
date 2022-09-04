import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { Page } from '../../';

interface Props{
  children    :ReactNode;
  title?      :string;
}

export default function CommonLayout({children, title=""}:Props){
  return(
  <Stack sx={{minHeight:1}}>
    <MainHeader/>
    <Page title={title}>
      {children}
    </Page>
    <Box sx={{flexGrow:1}}/>
    <MainFooter />
  </Stack>
  )
}