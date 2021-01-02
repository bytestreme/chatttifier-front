import * as React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import {AttachFile, EmojiEmotions, MoreHoriz, NotificationsActive, Search, Send} from "@material-ui/icons";
import theme from "app/theme";

const leftSideSize = 3;
const rightSideSize = 9;
const fullWidthSize = 12;
const halfGridSize = 6;

const useStyles = makeStyles({
    chatSection: {
        width: '100%',
        height: '93vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '85vh',
        overflowY: 'auto'
    },
    headerAreaLeft: {
        height: "7vh",
        borderRight: '1px solid #e0e0e0'
    },
    headerAreaRight: {
        height: "7vh"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    messageInputArea: {
        height: "8vh",
        borderTop: '1px solid #e0e0e0'
    }
});

function buildMessageText(id: number) {
    return (
        <ListItem key={id.toString(10)}>
            <Grid container>
                <Grid item xs={fullWidthSize}>
                    <ListItemText primary="Hi, Mike! How are you? Cool! Thanks!"/>
                </Grid>
                <Grid item xs={fullWidthSize}>
                    <ListItemText secondary={"10:" + ((10 + id).toString())}/>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default function HomeContainer() {
    const classes = useStyles();

    return (
        <div>
            <Grid container alignItems="center" justify="center">
                <Grid container alignItems="center" justify="flex-start" xs={leftSideSize}
                      className={classes.headerAreaLeft}>
                    <Typography variant="h5" className="header-message">Chattifier</Typography>
                </Grid>
                <Grid container alignItems="center" justify="center" xs={rightSideSize}
                      className={classes.headerAreaRight}>
                    <Grid item xs={halfGridSize}>
                        <ListItem button key="JohnDoe121">
                            <ListItemIcon>
                                <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                            </ListItemIcon>
                            <ListItemText primary="John Doe"/>
                        </ListItem>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
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
                </Grid>
            </Grid>
            <Grid container className={classes.chatSection}>
                <Grid item xs={leftSideSize} className={classes.borderRight500}>
                    <Grid container>
                        <ListItem button key="JohnDoe14">
                            <ListItemIcon>
                                <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                            </ListItemIcon>
                            <ListItemText primary="John Doe"/>
                        </ListItem>
                    </Grid>
                    <Grid item xs={fullWidthSize} style={{padding: '10px'}}>
                        <InputBase className={classes.input} placeholder="Search user"/>
                    </Grid>
                    <List>
                        <ListItem button key="JohnDoe13">
                            <ListItemIcon>
                                <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                            </ListItemIcon>
                            <ListItemText primary="John Doe">John Doe</ListItemText>
                            <ListItemText secondary="online"/>
                        </ListItem>
                        <ListItem button key="JohnDoe12">
                            <ListItemIcon>
                                <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                            </ListItemIcon>
                            <ListItemText primary="John Doe">Alice</ListItemText>
                        </ListItem>
                        <ListItem button key="JohnDoe1">
                            <ListItemIcon>
                                <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                            </ListItemIcon>
                            <ListItemText primary="John Doe">Cindy Baker</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={rightSideSize}>
                    <List className={classes.messageArea}>
                        {
                            [...Array(20)].map((_, i) => buildMessageText(i))
                        }
                    </List>
                    <Grid container className={classes.messageInputArea}>
                        <IconButton aria-label="menu">
                            <AttachFile/>
                        </IconButton>
                        <InputBase className={classes.input} placeholder="Text message"/>
                        <IconButton type="submit" aria-label="search">
                            <EmojiEmotions/>
                        </IconButton>
                        <IconButton aria-label="directions">
                            <Send/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

