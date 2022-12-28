import React from 'react'
import Header from './Header'
import BackgroundImage from '../../public/images/background.jpg'
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
import MyWorkTimeline from './MyWorkTimeline'
import MyEducationTimeline from './MyEducationTimeline';

import ContactMe from './ContactMe';
import { Divider, Grid } from '@material-ui/core';
import BlogCardDemo from './BlogCardDemo'


const useStyles = ({

});


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.myRefEdu = React.createRef()
        this.myRefExp = React.createRef()
        this.myRefPro = React.createRef()
    }
    scrollToMyRef = (item) => {
        if (item === "Experience") {
            window.scrollTo({
                top: this.myRefExp.current.offsetTop - 80,
                behavior: 'smooth',
            })
        }
        else if (item === "Education")
            window.scrollTo({ top: this.myRefEdu.current.offsetTop - 80, behavior: 'smooth', })
        else if (item === "projects")
            window.scrollTo({ top: this.myRefPro.current.offsetTop, behavior: 'smooth', })
    }

    render() {
        const classes = this.props.classes;
        return (

            <Parallax
                blur={0}
                bgImage={BackgroundImage}
                strength={400}
            >
                <Header scrollToMyRef={this.scrollToMyRef} />
                <div style={{ margin: "150px auto auto " }}>
                    <BlogCardDemo />
                </div>
                <div style={{ marginTop: '100px' }}>
                    <MyWorkTimeline ref={this.myRefExp} />
                    <MyEducationTimeline ref={this.myRefEdu} />
                    <MyProjects />
                    <ContactMe />
                </div>
            </Parallax>
        )
    }
}


export default withStyles(useStyles)(HomePage)