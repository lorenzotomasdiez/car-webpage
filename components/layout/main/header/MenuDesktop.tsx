import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Link, styled, Stack, ListItem, LinkProps } from '@mui/material';
import { MenuConfig, MenuConfigItemProp } from '.';



const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
})); 

const LinkSubStyle = styled((props: LinkProps) => (
  <ListItem sx={{ p: 0 }}>
    <Link target="_blank" rel="noopener" {...props}>
      {props.children}
    </Link>
  </ListItem>
))(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

interface Props{
  isOffset: boolean;
}

export const MenuDesktop = ({ isOffset }: Props) => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {MenuConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}


type MenuDesktopItemProps = {
  item: MenuConfigItemProp;
  isOpen: boolean;
  isHome: boolean;
  isOffset: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

function MenuDesktopItem({ item, isHome, isOpen, isOffset, onOpen, onClose}: MenuDesktopItemProps) {
  const { pathname } = useRouter();

  const { title, path} = item;

  const isActive = (path: string) => pathname === path;

  return (
    <NextLink href={path} passHref>
      <LinkStyle
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(isActive(path) && {
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}