import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Box, Grid, } from '@material-ui/core'
import NiitIcon from '../../public/images/niit.png'
import GoldBadge from '../../public/images/problemSolvBadge.png'
import { SignalCellularNullRounded } from '@material-ui/icons';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const myPubAndCert = [
    {
        head: "A Comparative Study of Aurdino UNO and Node MCU in IOT",
        body: "This paper provides Internet of Things oriented comparison of Arduino Uno and Node MCU boards with suitable selection of the hardware " +
            "development platforms that are capable enough to improve the understanding of technology and also summarizes various capabilities of available " +
            "hardware development platforms for IoT."
    },
    {
        image: [NiitIcon, GoldBadge],
        body: "Completed a 5 year long course in many fields of Computer Science like Java, SQL, Spring MVC, Web Development, Database mangement and Microsoft Office etc.  "+
        " Acheived 5 Star Gold Badge in Problem solving in HackerRank."
    }
]
export default class PubAndCert extends React.Component {

    customPubTemplate = (data, index) => {
   
        return (
            <Grid container key={index} direction="column" alignItems="center" key={index} style={{ backgroundColor: "black", paddingTop: "35px", paddingBottom: "50px" }}>
                {data.image ?
                    <Grid item>
                        {!Array.isArray(data.image) ? <img align="center" src={data.image} style={{ paddingTop: "20px", height: "65px", minWidth: "95px" }} />
                            : data.image.map((image, index) => <img name={index} align="center" key={index} src={image} style={{ paddingBottom:"12px",paddingLeft: "12px", paddingRight: "12px", paddingTop: "20px", height: "50px", width: "100px" }} />)}
                    </Grid> :
                    <Grid item >
                        <Typography align='center' variant="h5" style={{ fontSize: "18px", color: "#B3B3B3", marginLeft: "12%", marginRight: "12%", marginBottom: "12px", marginTop: "25px" }}>
                           <strong> {data.head} </strong>
                        </Typography>
                    </Grid>}
                    <Grid item>
                    <Typography align='center' variant="h5" style={{ fontSize: "18px", color: "#B3B3B3", marginLeft: "12%", marginRight: "12%", marginBottom: "30px", marginTop: "25px" }}>
                        {data.body}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    render() {
        return (
            <div style={{ backgroundColor: "black", paddingTop: "40px" }}>
                <Typography align="center" variant="h3" style={{ color: "white" }}>
                    <Box fontWeight="fontWeightMedium" m={1}>
                    Miscellaneous
             </Box>
                </Typography>
                <Carousel style={{ width: "800px" }}
                    additionalTransfrom={0}
                    showDots
                    arrows={false}
                    autoPlaySpeed={1000}
                    centerMode={false}
                    className=""
                    transitionDuration={500}
                    customTransition="all .5"
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                >
                    {myPubAndCert.map((data, index) => this.customPubTemplate(data, index))}
                </Carousel>
            </div>

        )
    }
}