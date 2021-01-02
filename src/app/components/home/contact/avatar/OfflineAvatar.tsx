import * as React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Badge, withStyles} from "@material-ui/core";


const OfflineBadge = withStyles((_) => ({}))(Badge);

export default function OfflineAvatar() {
    return (
        <OfflineBadge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
        </OfflineBadge>
    );
}