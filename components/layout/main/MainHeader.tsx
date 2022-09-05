import { useRouter } from 'next/router';
import { AppBar, Box, Container, styled, Toolbar, useTheme } from '@mui/material';
import { HEADER } from '../../../config';
import {useOffSetTop, useResponsive} from '../../../hooks';
import { cssStyles } from '../../../utils';
import { MenuDesktop, MenuMobile } from './header';
import { Logo } from '../../Logo';

const ToolbarStyle = styled(Toolbar)(({theme}) =>({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'],{
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]:{
    height: HEADER.MAIN_DESKTOP_HEIGHT
  }
}));


const ToolbarShadowStyle = styled(Toolbar)(({theme}) =>({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

const MainHeader = () => {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  
  const theme = useTheme();
  
  const {pathname} = useRouter();

  const isDesktop = useResponsive('up' , 'md');

  const isHome = pathname === '/'

  return (
    <AppBar sx={{boxShadow: 0, bgcolor:'transparent'}}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height:{md:HEADER.MAIN_DESKTOP_HEIGHT - 16},
          })
        }}
      >
        <Container
          sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >

          <Logo />

          <Box sx={{flexGrow:1}}/>

          {isDesktop && <MenuDesktop isOffset={isOffset} />}
          {!isDesktop && <MenuMobile isOffset={isOffset} />}

        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  )
}

export default MainHeader