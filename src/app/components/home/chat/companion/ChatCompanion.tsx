import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    companionColor: {
        color: "rgb(220, 220, 220)"
    },
});

export default function ChatCompanion() {

    const classes = useStyles();

    return (
        <Grid item xs={6}>
            <ListItem button key="JohnDoe121">
                <ListItemIcon>
                    <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                </ListItemIcon>
                <ListItemText className={classes.companionColor} primary="John Doe"/>
            </ListItem>
        </Grid>
    );
}