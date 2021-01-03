import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    profileSection: {
        borderRight: '1px solid #000',
    },
    profileText: {
        color: "#fff"
    },
    buttonsStyles: {
        color: "rgb(220, 220, 220)"
    }
});

export default function ProfileSection() {
    const classes = useStyles();

    return (
        <Grid item alignItems="center" className={classes.profileSection}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                    </ListItemIcon>
                    <ListItemText className={classes.profileText} primary="John Doe"/>
                </ListItem>
            </List>
        </Grid>
    );
}