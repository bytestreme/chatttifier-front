import * as React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    textMessage: {
        color: "rgb(220, 220, 220)"
    },
    time: {
        color: "rgb(150, 150, 150)"
    }
});


interface MessageTextProps {
    id: number;
}

export default function MessageText(props: MessageTextProps) {

    const classes = useStyles();

    return (
        <ListItem key={props.id.toString(10)}>
            <Grid container>
                <Grid item xs={12}>
                    <ListItemText className={classes.textMessage} primary="Hi, Mike! How are you? Cool! Thanks!"/>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText className={classes.time} disableTypography secondary={"10:" + ((10 + props.id).toString())}/>
                </Grid>
            </Grid>
        </ListItem>
    );
}