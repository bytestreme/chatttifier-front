import * as React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {OfflineAvatar, OnlineAvatar} from "app/components/home/contact/avatar";

interface ContactItemProps {
    id: number
}

export default function ContactItem(props: ContactItemProps) {
    return (
        <ListItem button key={props.id.toString(10) + "JohnDoe"}>
            <ListItemIcon>
                {
                    Math.random() >= 0.5 ?
                        <OnlineAvatar/>
                        :
                        <OfflineAvatar/>
                }
            </ListItemIcon>
            <ListItemText primary="John Doe">{"JohnDoe" + props.id.toString(10)}</ListItemText>
            <ListItemText secondary="timestamp goes here"/>
        </ListItem>
    );
}