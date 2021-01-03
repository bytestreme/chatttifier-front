import * as React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {AttachFile, EmojiEmotionsOutlined, Send} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import theme from "app/theme";

const useStyles = makeStyles({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "rgb(105, 116, 127)"
    },
    buttonColor: {
        color: "rgb(220, 220, 220)"
    },
    sendButton: {
        color: "rgb(82, 136, 193)"
    }
});

export default function MessageInput() {
    const classes = useStyles();

    return (
        <>
            <IconButton className={classes.buttonColor} aria-label="menu">
                <AttachFile/>
            </IconButton>
            <InputBase fullWidth className={classes.input} placeholder="Text message"/>
            <IconButton className={classes.buttonColor} type="submit" aria-label="search">
                <EmojiEmotionsOutlined/>
            </IconButton>
            <IconButton className={classes.sendButton} aria-label="send">
                <Send/>
            </IconButton>
        </>
    );
}