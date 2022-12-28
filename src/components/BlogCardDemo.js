import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, IconButton, Button, Typography, Box } from '@material-ui/core';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Rick from '../../public/images/rick.jpg'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import resume from '../../public/images/resume.pdf'
import { Link } from 'react-router-dom'
import StackExchangeIcon from '../../public/images/stackExchange.png'
import MyImage from '../../public/images/MyImage.jpg'


const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {

    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',

    maxWidth: 700,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(1),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(1),
    },
  },
  media: {

    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',

      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={MyImage}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={''}
          heading={
            <Typography variant="h3"
            >
              <Box fontWeight="fontWeightBold">
                Hello, I'm Pavan Sista.
              </Box>
            </Typography>}
          body={
            <Typography variant="h5"  >
              I'm a Software Engineer currently pursuing my Master's in Computer Science at Bishop's University, Quebec, Canada.
        </Typography>
          }
        />
        <IconButton target="_blank" href="https://www.linkedin.com/in/pavan-sista-8bb717111/" variant="contained" color="primary">
          <LinkedInIcon style={{ fontSize: "30px" }} />
        </IconButton>

        <IconButton target="_blank" href="https://stackoverflow.com/users/10585976/pavan-sista" variant="contained" color="primary">
          <img src={StackExchangeIcon} style={{ height: "30px", width: "30px" }} />
        </IconButton>

        <Link to={resume} target="_blank" download>
          <IconButton>
            <PictureAsPdfIcon style={{ fontSize: "30px", color: "#F82015" }} />
          </IconButton>
        </Link>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo



    //     "designation": "Service Desk Techinician",
    //     "date": "Mar 2020 - present",
    //     "corp": "CGI",
    //     "location": "Sherbrooke"
    // },