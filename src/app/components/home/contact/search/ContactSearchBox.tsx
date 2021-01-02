import * as React from 'react';
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import theme from "app/theme";

const useStyles = makeStyles({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    searchSection: {
        height: '8vh',
        padding: '10px',
        borderRight: '1px solid #e0e0e0',
    }
});

export default function ContactSearchBox() {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center" className={classes.searchSection}>
            <InputBase fullWidth className={classes.input} placeholder="Search user"/>
        </Grid>
    );
}