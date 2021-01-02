import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

export default function ChatCompanion() {
    return (
        <Grid item xs={6}>
            <ListItem button key="JohnDoe121">
                <ListItemIcon>
                    <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                </ListItemIcon>
                <ListItemText primary="John Doe"/>
            </ListItem>
        </Grid>
    );
}