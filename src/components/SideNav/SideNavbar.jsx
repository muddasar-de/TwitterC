import React from 'react';
import logo from '../../images/twitter.png';
import './SideNavbar.css';
import HomeIcon from '../../../node_modules/@material-ui/icons/Home';
import ExploreIcon from '../../../node_modules/@material-ui/icons/Explore';
import NotificationIcon from '../../../node_modules/@material-ui/icons/Notifications';
import ProfileIcon from '../../../node_modules/@material-ui/icons/AccountBox';
import SideNavLink from './SideNavLink';
import TweetButton from './TweetButton';

const Sidenavbar = () => {
  return (
    <>
      <div className='flex flex-col  sideNav justify-start main'>
        <img className='w-20 mb-6' src={logo} />
        <SideNavLink to='/' name='Home' icon={<HomeIcon />} />
        <SideNavLink to='/explore' name='Explore' icon={<ExploreIcon />} />
        <SideNavLink
          to='/notifications'
          name='Notifications'
          icon={<NotificationIcon />}
        />
        <SideNavLink to='/profile' name='Profile' icon={<ProfileIcon />} />
        <TweetButton />
      </div>
    </>
  );
};
export default Sidenavbar;
