import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import {MoreHoriz, NotificationsActive, Search} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    buttonColor: {
        color: "rgb(220, 220, 220)"
    },
});

export default function ChatActions() {

    const classes = useStyles();

    return (
        <Grid container justify="flex-end" xs={2}>
            <Grid item>
                <IconButton className={classes.buttonColor} aria-label="search">
                    <Search fontSize="small"/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.buttonColor} aria-label="notifications">
                    <NotificationsActive fontSize="small"/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.buttonColor} aria-label="more">
                    <MoreHoriz fontSize="small"/>
                </IconButton>
            </Grid>
        </Grid>
    );
}