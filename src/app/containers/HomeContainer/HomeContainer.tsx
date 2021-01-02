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
import {Badge, withStyles} from "@material-ui/core";

const leftSideSize = 3;
const rightSideSize = 9;
const fullWidthSize = 12;
const halfGridSize = 6;

const useStyles = makeStyles({
    bodySection: {
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
        flex: 1
    },
    messageInputArea: {
        height: "8vh",
        borderTop: '1px solid #e0e0e0'
    },
    contactList: {
        overflowY: 'scroll',
        height: '75vh'
    },
    profileSection: {
        borderRight: '1px solid #e0e0e0',
    },
    searchSection: {
        height: '8vh',
        padding: '10px',
        borderRight: '1px solid #e0e0e0',
    }
});
const OfflineBadge = withStyles((_) => ({}))(Badge);

const OnlineBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

function buildContactItem(id: number) {
    return (
        <ListItem button key={id.toString(10) + "JohnDoe"}>
            <ListItemIcon>
                {
                    Math.random() >= 0.5 ?
                        <OnlineBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                        </OnlineBadge>
                        : <OfflineBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                        </OfflineBadge>
                }
            </ListItemIcon>
            <ListItemText primary="John Doe">{"JohnDoe" + id.toString(10)}</ListItemText>
            <ListItemText secondary="timestamp goes here"/>
        </ListItem>
    );
}

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
            <Grid container className={classes.bodySection}>
                <Grid item xs={leftSideSize}>
                    <Grid item className={classes.profileSection}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="John Doe" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                </ListItemIcon>
                                <ListItemText primary="John Doe"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid container justify="center" alignItems="center" className={classes.searchSection}>
                        <InputBase fullWidth className={classes.input} placeholder="Search user"/>
                    </Grid>
                    <List className={classes.contactList}>
                        {
                            [...Array(20)].map((_, i) => buildContactItem(i))
                        }
                    </List>
                </Grid>
                <Grid item xs={rightSideSize}>
                    <List className={classes.messageArea}>
                        {
                            [...Array(20)].map((_, i) => buildMessageText(i))
                        }
                    </List>
                    <Grid alignItems="center" container className={classes.messageInputArea}>
                        <Grid container>
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

