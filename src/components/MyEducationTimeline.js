import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import academicData from '../../util/academicData.json'
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    primaryTail: {
        backgroundColor: theme.palette.primary.main
    }
}));



export default function MyEducationTimeline() {
    const classes = useStyles();

    const customTimeLine = (content, index) => {
        var onMobile=true
        if (window.innerWidth>700) {
            return (
                <TimelineItem >
                    <TimelineOppositeContent style={{ marginBottom: "60px", marginRight: "30px", }}>
                        <Typography variant="h4" style={{ color: "white" }}>
                            {content.degree}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" style={{ color: "#B3B3B3" }}>
                            {content.dept}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" style={{ color: "#B3B3B3" }}>
                            {content.date}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={index % 2 == 0 ? "primary" : "secondary"}>
                            <SchoolIcon style={{ fontSize: '35px' }} />
                        </TimelineDot>
                        {academicData.length - 1 == index ? null : <TimelineConnector className={index % 2 == 0 ? classes.primaryTail : classes.secondaryTail} />}
                    </TimelineSeparator>
                    <TimelineContent style={{ marginBottom: "60px", marginLeft: "30px" }}>
                        <Typography variant="h4" component="h1" style={{ color: "white" }}>
                            {content.univ}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" style={{ color: "#B3B3B3" }}>
                            {content.location}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            )
        }
        else {
            return (
                <TimelineItem >
                    <TimelineOppositeContent style={{ marginBottom: "60px", marginRight: "30px", }}>
                        <Typography variant="h4" style={{ color: "white" }}>
                            {content.degree}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" style={{ color: "#B3B3B3" }}>
                            {content.dept}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" style={{ color: "#B3B3B3" }}>
                            {content.date}
                        </Typography>
                        <Divider style={{ margin:"7px", backgroundColor: "#747474" }} />
                        <Typography variant="h4" component="h1" style={{ color: "white" }}>
                            {content.univ}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" style={{ color: "#B3B3B3" }}>
                            {content.location}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={index % 2 == 0 ? "primary" : "secondary"}>
                            <SchoolIcon style={{ fontSize: '35px' }} />
                        </TimelineDot>
                        {academicData.length - 1 == index ? null : <TimelineConnector className={index % 2 == 0 ? classes.primaryTail : classes.secondaryTail} />}
                    </TimelineSeparator>
                </TimelineItem>
            )
        }
    }

    return (
        <Grid container direction="column" alignItems="center" style={{ backgroundColor: "#251E3E" }}>
            <Grid item style={{ margin: "40px" }}>
                <Typography variant="h3" style={{ color: "white" }}>
                    <Box fontWeight="fontWeightMedium" m={1}>
                        Education
                  </Box>
                </Typography>
            </Grid>
            <Grid item >
                <Timeline >
                    {academicData.map((content, index) => customTimeLine(content, index))}
                </Timeline>
            </Grid>
        </Grid>
    );
}