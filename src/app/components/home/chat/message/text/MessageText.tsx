import * as React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";

interface MessageTextProps {
    id: number;
}

export default function MessageText(props: MessageTextProps) {
    return (
        <ListItem key={props.id.toString(10)}>
            <Grid container>
                <Grid item xs={12}>
                    <ListItemText primary="Hi, Mike! How are you? Cool! Thanks!"/>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText secondary={"10:" + ((10 + props.id).toString())}/>
                </Grid>
            </Grid>
        </ListItem>
    );
}