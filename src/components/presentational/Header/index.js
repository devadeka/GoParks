import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderTitle,
  HeaderComponent,
  HeaderButton,
  SyncUpIcon,
  LogoutIcon,
} from './styled';

const Header = () => (
  <Link to="/park_select">
    <HeaderComponent>
      <HeaderTitle>GoParks</HeaderTitle>
      <HeaderButton>
        <SyncUpIcon />
      </HeaderButton>
      <HeaderButton>
        <LogoutIcon />
      </HeaderButton>
    </HeaderComponent>
  </Link>
);
export default Header;
