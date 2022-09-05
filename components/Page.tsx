import { Box, BoxProps } from "@mui/material";
import Head from "next/head";

import { FC, ReactNode } from "react"
import { DEFAULT_PROJECT_NAME } from "../config";

interface Props extends BoxProps{
  children    :ReactNode;
  meta?       :ReactNode;
  title?      :string;
}

export const Page:FC<Props> = ({children, title="", meta, ...other}) =>(
  <>
    <Head>
      <title>{`${title} | ${DEFAULT_PROJECT_NAME}`}</title>
    </Head>

    <Box {...other}>
      {children}
    </Box>
  </>
);
