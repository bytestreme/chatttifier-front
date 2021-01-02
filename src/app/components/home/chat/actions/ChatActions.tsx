import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import {MoreHoriz, NotificationsActive, Search} from "@material-ui/icons";

export default function ChatActions() {
    return (
        <Grid container justify="flex-end" xs={2}>
            <Grid item>
                <IconButton aria-label="search">
                    <Search fontSize="small"/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="notifications">
                    <NotificationsActive fontSize="small"/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="more">
                    <MoreHoriz fontSize="small"/>
                </IconButton>
            </Grid>
        </Grid>
    );
}