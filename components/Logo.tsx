import { FC } from 'react';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export const Logo:FC<Props> = ({ disabledLink = false, sx }) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 50, height: 50, cursor: 'pointer', ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        
        <g fill={PRIMARY_MAIN}>
          <path
            fill="url(#BG1)"
            transform="translate(-28.524,-64.797)" 
            d="m28.524 388.986c0.812 3.167 3.554 6.404 7.316 7.215h11.37l0.58 0.229v28.691h7.1v-28.691l0.645-0.229h11.38c3.804-0.98 6.487-4.048 7.285-7.215v-0.07h-45.676v0.07"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m98.795 425.202h27.011c3.758-0.747 6.551-4.058 7.334-7.263h-41.679c0.778 3.206 3.612 6.516 7.334 7.263"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m98.795 410.485h27.011c3.758-0.741 6.551-4.053 7.334-7.262h-41.679c0.778 3.21 3.612 6.521 7.334 7.262"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m98.795 396.163h27.011c3.758-0.749 6.551-4.058 7.334-7.265h-41.679c0.778 3.207 3.612 6.516 7.334 7.265"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m160.398 396.094h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449 0.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-0.038h39.415v-21.944h-32.42v-7.159"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m245.319 425.206c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l0.02-29.118-7.065 0.02v36.238h32.383"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m272.845 396.192h27.02c3.753-0.746 6.544-4.058 7.331-7.262h-41.681c0.779 3.205 3.611 6.516 7.33 7.262"
          />
          <path
            fill="url(#BG1)" 
            transform="translate(-28.524,-64.797)" 
            d="m266.601 403.28v21.912h7.027v-14.589h25.575v14.589h7.022v-21.874l-39.624-0.038"
          />
        </g>
        <g fill={PRIMARY_DARK}>
          <path
            fill="url(#BG2)"
            transform="translate(-33.796,-64.797)" 
            d="m173.146 317.299 35.476-199.519c33.815 0 44.481 3.708 46.021 18.843 0 0 22.684-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882 0.059-4e-3 -26.176-31.883s-44.86 0.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636 1.549-15.136 12.202-18.844 45.79-18.868l35.762 199.548"
          />
          <path
            fill="url(#BG2)" 
            transform="translate(-33.796,-64.797)" 
            d="m173.132 80.157c36.09-0.276 77.399 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669-46.227-18.289-89.518-24.548-126.797-24.705-37.277 0.157-80.566 6.417-126.787 24.705 0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.596-24.29 119.687-24.014h5e-3"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
};
