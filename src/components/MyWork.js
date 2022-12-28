import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Grid, Typography, Box } from '@material-ui/core'
import ReactIcon from '../../public/images/ReactIcon.png'
import SpringIcon from '../../public/images/spring-boot.png'
import NodeIcon from '../../public/images/nodejs-logo.png'
import GraphAndPrisma from '../../public/images/GraphAndPrisma.jpg'
import MongoDBIcon from '../../public/images/mongodb.png'
import BlazorIcon from '../../public/images/Blazor.png'
import DotNetCoreIcon from '../../public/images/DotNetCore.png'

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
const myWork = [{
    image: ReactIcon,
    body: "Designed and developed UI for an large e-commerce application owned by the state goverment using React, React Redux"+
    " and Material UI. Ensured responsiveness and mobile compatibility of all the pages on all platforms and browsers. Also"+
    " developed few small scale applications like WeatherApp and deployed them in Heroku"
},

{
    image: SpringIcon,
    body: "Restructed stand-alone applications developed in struts and JSP's to microservices using Spring Boot and JPA. Provided security by using"+
    " Spring Security OAuth2 for RESTful services."
},

{
    image: [NodeIcon,MongoDBIcon],
    body: "Configured Express and Node as a middleware between React and Spring boot to authenticate"+
    " request and responses using JWT token. Developed multiple applications using React.js, Node.js and MongoDB."
},
{
    image:GraphAndPrisma,
    body:"Created RESTful services by using GraphQL as a framework to optimize requests and responses by creating a single end point."+
    " Used Prisma an interface between GraphQL and databases like MongoDB and MySql."
},
{
    image: [BlazorIcon,DotNetCoreIcon],
    body:"Currently working on rewriting applications developed in VB3 and VB6 to Blazor server pages using .NET Core 3.0 and Bootstrap."
}
]
export default class MyWork extends React.Component {
    constructor(props) {
        super(props);
    }

    customWorkTemplate = (data, index) => {
      console.log(data.image)
        return (
  
            <Grid container direction="column" alignItems="center" key={index} style={{ backgroundColor: "black", paddingTop: "35px", paddingBottom: "50px" }}>
                <Grid item>
                    {!Array.isArray(data.image)?<img align="center" src={data.image} style={{ paddingTop: "20px", height: "65px", minWidth: "95px" }} />
                    :data.image.map((image,index)=><img name={index} align="center" key={index} src={image} style={{ paddingLeft:"12px",paddingRight:"12px",paddingTop: "20px", height: "65px", minWidth: "85px" }} />)} 
                    
                </Grid>
                <Grid item >
                    <Typography align='center' variant="h5" style={{fontSize:"18px", color: "#B3B3B3", marginLeft: "12%", marginRight: "12%", marginBottom: "30px", marginTop: "25px" }}>
                        {data.body}
                    </Typography>
                </Grid>
            </Grid>

        )
    }
    render() {
        return (
            <div style={{backgroundColor:"black", paddingTop:"40px"}}>
                 <Typography align="center" variant="h3" style={{ color: "white" }}>
                    <Box fontWeight="fontWeightMedium" m={1}>
                        Work
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
                {myWork.map((data, index) => this.customWorkTemplate(data, index))}
            </Carousel>
            </div>
        );
    }
}