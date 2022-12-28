import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid container direction="row" alignItems="center" justify="space-around" style={{ paddingTop: "50px",paddingBottom:"50px" , backgroundColor:"#000000"}}>
                <Grid item align="center">
                    <Grid item>
                        <PhoneIcon style={{ fontSize: "35" ,color:"#F50057"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{color:"#F50057"}}>
                            <Box fontWeight="fontWeightMedium" m={1}>
                                Contact me at
                    </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" style={{color:"white"}}>
                            <Box fontWeight="fontWeightMedium" m={1}>
                                +1 819 919 0940
                    </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item align="center" >
                    <Grid item>
                        <MailIcon style={{ fontSize: "35" ,color:"#F50057"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{color:"#F50057"}}>
                            <Box fontWeight="fontWeightMedium" m={1}>
                                Email me at
                    </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" style={{color:"white"}}>
                            <Box fontWeight="fontWeightMedium" m={1}>
                                pavansista97@gmail.com
                    </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}