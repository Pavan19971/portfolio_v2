import React from 'react'
import Header from './Header'
import BackgroundImage from '../../public/images/background.jpg'
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
import MyWorkTimeline from './MyWorkTimeline'
import MyEducationTimeline from './MyEducationTimeline';
import MyWork from './MyWork'
import ContactMe from './ContactMe';
import { Divider, Grid } from '@material-ui/core';
import BlogCardDemo from './BlogCardDemo'
import PubAndCert from './PubAndCert';


const useStyles = ({

});


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.myRefEdu = React.createRef()
        this.myRefExp = React.createRef()
        this.myRefWork = React.createRef()
        this.myRefCon = React.createRef();
        this.myRefEdu = React.createRef();
    }
    scrollToMyRef = (item) => {
        console.log(this.myRefExp)
        if (item === "Experience") {
            window.scrollTo({
                top: this.myRefExp.current.offsetTop - 80,
                behavior: 'smooth',
            })
        }
        else if (item==="Home")
        window.scrollTo({ top: 0, behavior: 'smooth', })
        else if (item === "Education")
            window.scrollTo({ top: this.myRefEdu.current.offsetTop - 80, behavior: 'smooth', })
        else if (item === "Work")
            window.scrollTo({ top: this.myRefWork.current.offsetTop -15, behavior: 'smooth', })
        else if (item === "Contact")
            window.scrollTo({ top: this.myRefCon.current.offsetTop, behavior: 'smooth', })
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
                    <div ref={this.myRefExp} >
                        <MyWorkTimeline />
                    </div>
                    <div ref={this.myRefEdu}>
                        <MyEducationTimeline />
                    </div>
                   
                    <div ref={this.myRefWork} >
                        <MyWork />
                    </div>
                    <div ref={this.myRefPC}>
                        <PubAndCert/>
                    </div>
                    <div ref={this.myRefCon}>
                        <ContactMe />
                    </div>
                </div>
            </Parallax>
        )
    }
}


export default withStyles(useStyles)(HomePage)