import React from 'react'
import SideBarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css'
import {AiFillHome} from '@react-icons/all-files/ai/AiFillHome';
import {FaHotjar} from '@react-icons/all-files/fa/FaHotjar';
import {MdSubscriptions} from '@react-icons/all-files/md/MdSubscriptions';
import {MdVideoLibrary} from '@react-icons/all-files/md/MdVideoLibrary';
import {FaHistory} from '@react-icons/all-files/fa/FaHistory';
import {MdPermMedia} from '@react-icons/all-files/md/MdPermMedia';
import {MdWatchLater} from '@react-icons/all-files/md/MdWatchLater';
import {AiTwotoneLike} from '@react-icons/all-files/ai/AiTwotoneLike';


function Sidebar() {
  return (
    <div className='sidebar'>
        <SideBarRow selected Icon={AiFillHome} title='Home' />
        <SideBarRow Icon={FaHotjar} title='Trending' />
        <SideBarRow Icon={MdSubscriptions} title='Subscription' />
        <hr />
        <SideBarRow Icon={MdVideoLibrary} title='Library' />
        <SideBarRow Icon={FaHistory} title='History' />
        <SideBarRow Icon={MdPermMedia} title='Your videos' />
        <SideBarRow Icon={MdWatchLater} title='Watch later' />
        <SideBarRow Icon={AiTwotoneLike} title='Liked vides' />
        <hr />
    </div>
)
}

export default Sidebar;
