import * as React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {AttachFile, EmojiEmotions, Send} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import theme from "app/theme";

const useStyles = makeStyles({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
});

export default function MessageInput() {
    const classes = useStyles();

    return (
        <>
            <IconButton aria-label="menu">
                <AttachFile/>
            </IconButton>
            <InputBase fullWidth className={classes.input} placeholder="Text message"/>
            <IconButton type="submit" aria-label="search">
                <EmojiEmotions/>
            </IconButton>
            <IconButton aria-label="send">
                <Send/>
            </IconButton>
        </>
    );
}