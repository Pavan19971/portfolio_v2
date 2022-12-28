// A0202D
import React from 'react'
import { AppBar, Button, Grid, Typography, Box, Toolbar, Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const drawerWidth = 240;

const useStyles = theme => ({

    button: {
        borderColor: "#000000",
        '&:hover': {
            borderStyle: "solid",
            border: "#F50057",
        }
    },
    grid: {
        paddingLeft: '6%',
        paddingRight: '6%'
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#000000",
    },
    drawerHeader: {

        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appBarBackground: "transparent",
            titleColor: "#B3B3B3",
            drawerOpen: false,
            onMobile: false
        }

    }
    listenScrollEvent = () => {
        if (window.scrollY < 500) {
            this.setState({ appBarBackground: "#000000" })
        }
        else {
            this.setState({ appBarBackground: "#000000" })
        }
    }

    handleDrawer = () => {
        if (this.state.handleDrawer)
            this.setState({ handleDrawer: false })
        else
            this.setState({ handleDrawer: true })
    }
    componentDidMount() {
        if (window.innerWidth >= 700)
            this.setState({ onMobile: false })
        else
            this.setState({ onMobile: true })

    }
    handleHomeClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    render() {
        window.addEventListener('scroll', this.listenScrollEvent);
        const classes = this.props.classes;
        return (

            <div className={classes.root}>

                <AppBar
                    style={{ background: this.state.appBarBackground }}
                    position="fixed" >
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            className={classes.grid}>
                            <Grid item>
                                <Typography variant="h4" gutterBottom
                                    style={{ color: this.state.titleColor }}>
                                    <Box fontWeight="fontWeightBold" m={1}>
                                        Pavan Sista
                                    </Box>
                                </Typography>
                            </Grid>

                            {this.state.onMobile ?
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={this.handleDrawer}
                                // className={clsx(open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton> :
                                <Grid item>
                                    <div>
                                        <Button  variant="outlined"
                                            onClick={() => this.props.scrollToMyRef("Home")}
                                            style={{ marginLeft: "2px", marginRight: "2px" }}
                                            className={classes.button}
                                            size="large"
                                        >
                                            <Typography variant="h6"
                                                style={{ color: this.state.titleColor }}>
                                                <Box fontWeight="fontWeightMedium" m={1}>
                                                    Home
                                       </Box>
                                            </Typography>
                                        </Button>
                                        <Button variant="outlined"  style={{ marginLeft: "2px", marginRight: "2px" }}
                                            className={classes.button}
                                            size="large"
                                            onClick={() => this.props.scrollToMyRef("Experience")}
                                        >
                                            <Typography variant="h6"
                                                style={{ color: this.state.titleColor }}>
                                                <Box fontWeight="fontWeightMedium" m={1}>
                                                    Experience
                                       </Box>
                                            </Typography>
                                        </Button>
                                        <Button variant="outlined" style={{ marginLeft: "2px", marginRight: "2px" }}
                                            className={classes.button}

                                            size="large"
                                            onClick={() => this.props.scrollToMyRef("Education")}
                                        >
                                            <Typography variant="h6"
                                                style={{ color: this.state.titleColor }}>
                                                <Box fontWeight="fontWeightMedium" m={1}>
                                                    Education
                                       </Box>
                                            </Typography>
                                        </Button>
                                        <Button  variant="outlined" style={{ marginLeft: "2px", marginRight: "2px" }}
                                            className={classes.button}
                                            //style={{ border: "#9B2F2D", borderStyle: "solid" }}
                                            size="large"
                                            onClick={() => this.props.scrollToMyRef("Work")}
                                        >
                                            <Typography variant="h6"
                                                style={{ color: this.state.titleColor }}>
                                                <Box fontWeight="fontWeightMedium" m={1}>
                                                    Work
                                       </Box>
                                            </Typography>
                                        </Button>
                                        <Button  variant="outlined" style={{ marginLeft: "2px", marginRight: "2px" }}
                                            className={classes.button}
                                            //style={{ border: "#9B2F2D", borderStyle: "solid" }}
                                            size="large"
                                            onClick={() => this.props.scrollToMyRef("Contact")}
                                        >
                                            <Typography variant="h6"
                                                style={{ color: this.state.titleColor }}>
                                                <Box fontWeight="fontWeightMedium" m={1}>
                                                    Contact
                                       </Box>
                                            </Typography>
                                        </Button>
                                    </div>
                                </Grid>
                            }
                        </Grid>

                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={this.state.handleDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawer}>
                            {this.props.theme.direction === 'rtl' ? <ChevronLeftIcon style={{ color: "#F50057" }} /> : <ChevronRightIcon style={{ color: "#F50057" }} />}
                        </IconButton>
                    </div>

                    <List>
                        {['Home', 'Experience', 'Education', 'Work', 'Contact'].map((text, index) => (
                            <div align="Center" style={{marginBottom:"10px", marginTop:"10px"}}>
                                <Button style={{width:"150px"}}key={index} variant="outlined" color="secondary" onClick={() => this.props.scrollToMyRef(text)}>
                                    <Typography variant="h6"
                                        style={{ color: this.state.titleColor }}>
                                        <Box fontWeight="fontWeightMedium" m={1}>
                                            {text}
                                        </Box>
                                    </Typography>
                                </Button>
                                {/* <ListItem key={index} button key={text} onClick={() => this.props.scrollToMyRef(text)}>
                                    <Typography variant="h6"
                                        style={{ color: this.state.titleColor }}>
                                        <Box fontWeight="fontWeightMedium" m={1}>
                                            {text}
                                        </Box>
                                    </Typography>
                                </ListItem> */}
                             
                            </div>
                        ))}
                    </List>
                </Drawer>

            </div>
        )
    }
}

export default withStyles(useStyles, { withTheme: true })(Header)