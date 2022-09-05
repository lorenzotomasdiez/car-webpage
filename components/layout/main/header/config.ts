import HomeIcon from '@mui/icons-material/Home';

export interface MenuConfigItemProp {
  title     :string;
  path      :string;
  Icon      :any;
}
export const MenuConfig:MenuConfigItemProp[] = [
  {
    title:'Home',
    path: '/',
    Icon: HomeIcon
  }
]
