import React from 'react';

// Components
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';

// Materialize
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './Sidebar.css';

function Sidebar(){

    const [ {user }, dispatch] = useStateValue();
    return(
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow 
              Icon={LocalHospitalIcon}
               title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    );
}

export default Sidebar;