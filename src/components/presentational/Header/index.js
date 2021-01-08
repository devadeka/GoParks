import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  HeaderTitle,
  HeaderComponent,
  HeaderButton,
  SyncUpIcon,
  LogoutIcon,
} from './styled';

const Header = () => {
  const history = useHistory();
  const handleTitleClick = () => history.push('/park_select');
  return (
    <HeaderComponent>
      <HeaderTitle>GoParks</HeaderTitle>
      <HeaderButton onClick={handleTitleClick}>
        <SyncUpIcon />
      </HeaderButton>
      <HeaderButton>
        <LogoutIcon />
      </HeaderButton>
    </HeaderComponent>
  );
};
export default Header;
