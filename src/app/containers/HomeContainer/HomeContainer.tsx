import * as React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import theme from "app/theme";
import {MessageInput} from "app/components/home/chat/message/input";
import {ContactItem} from "app/components/home/contact/item";
import {MessageText} from "app/components/home/chat/message/text";
import {ContactSearchBox} from "app/components/home/contact/search";
import {ChatActions} from "app/components/home/chat/actions";
import {ChatCompanion} from "app/components/home/chat/companion";
import {ProfileSection} from "app/components/home/profile";

const leftSideSize = 3;
const rightSideSize = 9;

const useStyles = makeStyles({
    bodySection: {
        width: '100%',
        height: '93vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #000'
    },
    messageArea: {
        height: '85vh',
        overflowY: 'auto',
        backgroundColor: '#0e1621'
    },
    headerAreaLeft: {
        height: "7vh",
        borderRight: '1px solid #000',
        backgroundColor: "#17212b",
        color: "rgb(220, 220, 220)",
        paddingLeft: "15px"
    },
    headerAreaRight: {
        height: "7vh",
        backgroundColor: "#17212b"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    messageInputArea: {
        height: "8vh",
        borderTop: '1px solid #000',
        backgroundColor: "#17212b"
    },
    contactList: {
        overflowY: 'scroll',
        height: '75vh'
    },
});

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
                    <ChatCompanion/>
                    <Grid item xs={4}>
                    </Grid>
                    <ChatActions/>
                </Grid>
            </Grid>
            <Grid container className={classes.bodySection}>
                <Grid item xs={leftSideSize} style={{
                    backgroundColor: "#17212b"
                }}>
                    <ProfileSection/>
                    <ContactSearchBox/>
                    <List className={classes.contactList}>
                        {
                            [...Array(20)].map((_, i) => <ContactItem id={i}/>)
                        }
                    </List>
                </Grid>
                <Grid item xs={rightSideSize}>
                    <List className={classes.messageArea}>
                        {
                            [...Array(20)].map((_, i) =>  <MessageText id={i}/>)
                        }
                    </List>
                    <Grid alignItems="center" container className={classes.messageInputArea}>
                        <Grid container>
                            <MessageInput/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

