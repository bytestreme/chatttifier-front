import * as React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {OfflineAvatar, OnlineAvatar} from "app/components/home/contact/avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    contactText: {
        color: "rgb(220, 220, 220)"
    },
    info: {
        color: "rgb(161,161,161)"
    }
});

interface ContactItemProps {
    id: number
}

export default function ContactItem(props: ContactItemProps) {

    const classes = useStyles();

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
            <ListItemText className={classes.contactText} primary="John Doe">{"JohnDoe" + props.id.toString(10)}</ListItemText>
            <ListItemText disableTypography className={classes.info} secondary="timestamp goes here"/>
        </ListItem>
    );
}