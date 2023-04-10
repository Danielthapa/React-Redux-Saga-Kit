import React from 'react';
import AddIcon from './icons/AddIcon';
import AvatarIcon from './icons/AvatarIcon';
import CalendarIcon from './icons/CalendarIcon';
import DashboardIcon from './icons/DashboardIcon';
import RackIcon from './icons/RackIcon';
import ReservationsIcon from './icons/ReservationsIcon';
import ToggleSidebar from './icons/ToggleSidebarIcon';
import ViewIcon from './icons/ViewIcon';
import DownArrow from './icons/DownArrow';
import RightArrow from './icons/RightArrow';
import CheckInIcon from './icons/CheckInIcon';
import CheckOutIcon from './icons/CheckOutIcon';
import AppDrawerIcon from './icons/AppDrawerIcon';
import CreateShortcut from './icons/CreateShortcut';
import SettingsIcon from './icons/SettingsIcon';
import SignOutIcon from './icons/SignOutIcon';
import UserIcon from './icons/UserIcon';
import ExpandIcon from './icons/ExpandIcon';
import AdultGroupIcon from './icons/AdultGroupIcon';
import withIconWrapper from '../components/HOCs/IconWrapper';
import SubtractIcon from './icons/SubtractIcon';
import BedIcon from './icons/BedIcon';
import CloseIcon from './icons/CloseIcon';
import CollapseArrowIcon from './icons/CollapseIcon';
import ExpandArrowIcon from './icons/ExpandArrowIcon';
import FilterIcon from './icons/FilterIcon';
import SortIcon from './icons/SortIcon';
import SearchIcon from './icons/SearchIcon';
import ExportIcon from './icons/ExportIcon';
import RegisterIcon from './icons/RegisterIcon';
import EyeIcon from './icons/EyeIcon';
import LockCloseIcon from './icons/LockCloseIcon';
import LockOpenIcon from './icons/LockOpenIcon';
import NextArrowIcon from './icons/NextArrowIcon';
import EnterIcon from './icons/EnterIcon';
import ExitIcon from './icons/ExitIcon';
import PhoneIcon from './icons/PhoneIcon';
import BookingIcon from './icons/BookingIcon';
import LeftArrow from './icons/LeftArrow';
import ExtraBedIcon from './icons/ExtraBedIcon';
import CheckMarkIcon from './icons/CheckMarkIcon';
import EditIcon from './icons/EditIcon';
import MagnifierIcon from './icons/MagnifierIcon';

const Icons = ({ type = '', ...props }) => {
  if (typeof type !== 'string') return <span>NA</span>;

  switch (type) {
    case 'ToggleSidebar':
      return <ToggleSidebar {...props} />;
    case 'DashboardIcon':
      return <DashboardIcon {...props} />;
    case 'ReservationsIcon':
      return <ReservationsIcon {...props} />;
    case 'CalendarIcon':
      return <CalendarIcon {...props} />;
    case 'AddIcon':
      return <AddIcon {...props} />;
    case 'SubtractIcon':
      return <SubtractIcon {...props} />;
    case 'RackIcon':
      return <RackIcon {...props} />;
    case 'ViewIcon':
      return <ViewIcon {...props} />;
    case 'AvatarIcon':
      return <AvatarIcon {...props} />;
    case 'DownArrow':
      return <DownArrow {...props} />;
    case 'RightArrow':
      return <RightArrow {...props} />;
    case 'LeftArrow':
      return <LeftArrow {...props} />;
    case 'CheckIn':
      return <CheckInIcon {...props} />;
    case 'CheckOut':
      return <CheckOutIcon {...props} />;
    case 'AppDrawer':
      return <AppDrawerIcon {...props} />;
    case 'CreateShortcut':
      return <CreateShortcut {...props} />;
    case 'CheckMarkIcon':
      return <CheckMarkIcon {...props} />;
    case 'SettingsIcon':
      return <SettingsIcon {...props} />;
    case 'SignOutIcon':
      return <SignOutIcon {...props} />;
    case 'UserIcon':
      return <UserIcon {...props} />;
    case 'ExpandIcon':
      return <ExpandIcon {...props} />;
    case 'CollapseArrowIcon':
      return <CollapseArrowIcon {...props} />;
    case 'ExpandArrowIcon':
      return <ExpandArrowIcon {...props} />;
    case 'AdultGroupIcon':
      return <AdultGroupIcon {...props} />;
    case 'BedIcon':
      return <BedIcon {...props} />;
    case 'CloseIcon':
      return <CloseIcon {...props} />;
    case 'FilterIcon':
      return <FilterIcon {...props} />;
    case 'SortIcon':
      return <SortIcon {...props} />;
    case 'SearchIcon':
      return <SearchIcon {...props} />;
    case 'ExportIcon':
      return <ExportIcon {...props} />;
    case 'RegisterIcon':
      return <RegisterIcon {...props} />;
    case 'EyeIcon':
      return <EyeIcon {...props} />;
    case 'LockCloseIcon':
      return <LockCloseIcon {...props} />;
    case 'LockOpenIcon':
      return <LockOpenIcon {...props} />;
    case 'NextArrowIcon':
      return <NextArrowIcon {...props} />;
    case 'EnterIcon':
      return <EnterIcon {...props} />;
    case 'ExitIcon':
      return <ExitIcon {...props} />;
    case 'PhoneIcon':
      return <PhoneIcon {...props} />;
    case 'BookingIcon':
      return <BookingIcon {...props} />;
    case 'ExtraBedIcon':
      return <ExtraBedIcon {...props} />;
    case 'EditIcon':
      return <EditIcon {...props} />;
    case 'MagnifierIcon':
      return <MagnifierIcon {...props} />;
    default:
      return <span>NA</span>;
  }
};

export default withIconWrapper(Icons);
