import * as React from 'react';
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    input: {
        color: "rgb(105, 116, 127)",
        backgroundColor: "rgb(36, 47, 61)",
        padding: "2px 2px 2px 10px",
        borderRadius: "8px"
    },
    searchSection: {
        height: '8vh',
        padding: '10px',
        borderRight: '1px solid #000',
    },
    searchText: {
        color: "#fff"
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