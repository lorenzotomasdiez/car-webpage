import { Box, BoxProps } from "@mui/material";
import Head from "next/head";

import { forwardRef, ReactNode } from "react"
import { DEFAULT_PROJECT_NAME } from "../config";

interface Props extends BoxProps{
  children    :ReactNode;
  meta?       :ReactNode;
  title?      :string;
}

export const Page = forwardRef<HTMLDivElement, Props>(({children, title="", meta, ...other}, ref)=>(
  <>
    <Head>
      <title>{`${title} | ${DEFAULT_PROJECT_NAME}`}</title>
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));
