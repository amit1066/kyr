import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Pmjdy from "./pmjdy";
import { Grid, Paper } from '@material-ui/core';

var opt;

const images = [
  {
    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABO1BMVEX///9ChfTpQzUPnVj7uwX7uADoNyY1f/QAmU6xyPr0sa7936am0bj7tgAAlUYAmlI8gvQpevPpPi/oPDY3h/lDhPnoMR7oLRjuQCcLnk8wffPoNST8vgDyhyOkrDmjZ6ctkbHtcmr3xcLue3T+9uT8zF/F1/uz2cP1+/jrVUnwjoj2vrvym5b85uT98/L74N7nJAj50tD+6cD8yVP80nfsZVz+79L8zmfzpaD95LH8xUH/+vD925b+9eH0tbfj6/3e7+Vwu5F7pfeOsvimwflXsoDv9P5WkPWVy6zz9/7vhX/91oj7wSrqT0LrXlP+68X0pYfznHDzlVXyjzn3hxj2mI3g0IjPxXS9vF+krzOkjHimd7Ooh8CqmdCtrOB/xKNEnLJmmfZwsbSGv7ay2bhFrHSZufjN5tjO3fzX2lGQAAAI3ElEQVR4nN3d60MaRxAA8OWAO3ygx7X12iN9WKNiTFojGIOPqiCiEZu+3621bWL+/7+gewiKCLI7M7vnMJ/yKd1fZnb2cXdUCPsxueE4ZysbC09erj7/IoH/vvFYmQscGUEQuMW50Fl4+WXSIyKOede5FYE7V1xYHaNcPguduxEU1+Y/T3pkVDFZHCCMkXPu0/FI5KQ7WCjDDReeJT08grhHKBO5NgbGe4XSGD5JeoTYGCGUtequJj1GXIwUOk64wbrlKAhlX+W8dKgIZRpfJT1OeKgJHXeFbaUqCuVmjut2VVUoK/V50mOFhbrQWeO5bGgInZAlUUfohBxXDS2hs8ZwLuoJnZBfR9UUBgG7dVFT6ARfJz1i3dAVOkVuxyltIbuGqi90irymIkAYzCc9aK0ACJnVKUToBEmPWidAQvdp0sPWCJDQCRk1G5jQZXSrARM6a3ySCBS6fHY2QCGjmQgVui+THrlqQIWOk/TIVQMsnONy3AcLAy4LBrxKw6SHrhhwIZcyhQsDJksiXMilmyKEIY9n/AhhkcclP0LIZCJihCtJD14pMJ2Gx4qIErJoNRghj1c0MMLiZNKjVwmM0MqV2+761OlmeauVybS2youVneqLbb2/ACM0fbx4XK208vl8NpvNdEP+OZ/PlHdeq/8tKKHJ6/31SibfQ7sdkrm189iCcMMU7/WmTN0Q3Y2yNaVSsCihmSV/eyczktdFLr4wKnTOTPgqiryryLeqvISavrYxs25MSF+lp9q+qzzeV6soIfFbC+sZiK9t3Bzecx5OL90u54G+TNxzhk5HlHCBELg+dPFTTOOiCSHhEbiCSGAnjZnBsxG1LyV7drHdwiWwk8YpaiHZRc0uAa9NrBALqe6EX6MrtBvZMq2Q6BlilQwoiVukQporYUqgJLYIhTSHJ1rgACJCSNJK6ebgNbGvUBFCikazSw6UxNtrP0aIB25TLIN3In9KI6TYlbZMACWx9zwFF7r4u8SKkRTGxJ47HMRTbvSN97qBSdiJnoYKf1MBffzdNgfMZG+mIliIL9KyqRqNI3990AAL0Vs26qW+L67rFCrEn35NZlBGdgcpRH+NaKyPdiO/jRKi+8xjszUqI7uJEqIfHS6aTqFM4i5CGGDvgk3sR/ujsz+FCdEp3DSfwu7OBva9BfYq2ORifxPZCliI/s7y1EYKO+0UIsR/i2AHmMlOAYXog6HBLfftaMGE+A+7ypaA7d2pvtBF79fs9Jk44iMGIIdYoKhamoZxAIRr+O/VLexnuiH3NbrCkOA9KIsplN1UU0jxJfcLa9NQRllT6FJcc+9YzGEmryekeXC/aBEoJ6KOkOjdC5vATLb6lbrQpXn1wt5q2BaeqgtdojcvrDYa2WqUhXNUL17YXO9lPFIVhmRvy1ptpVKo1mkCwp9RMH7J1if8JlAAFlcI38q3ulhI4bejhQFdhcaxZVn43XsjE3hG+9tQhp4ZDhV+P0IYhNQfbdsFZh59fK8wCF+Rf3f/kISBkZ9KfjDCoBg+MfJdk+1OM0TohmemPvmZsrtrGyQM3NB5avC39UjetIQK2//zgPlJw1/dleMPfYxHV/hD8cNOzIVhsPHjqo0fRtydMhnVanXqp59/+eQqfv3t06v4/Y8//5owHXsW/vX2l88b6Z746LMP3u+E73umo1AzrJtuzMzkZmf7hCmL4TUN8s7TUpfuD8vClDdhhleaTs/c1SUh9C9M+PYPZnIDeQkIUykjvsHpGxNh6V7fGAiP7/dJ4d+WhbTN9DI9dP4lJaTtNOejEhgL/7EsJFzz90cnUEbu38iusE4GXJ5R8EnhtGdV6B1SAY/VgOncf1aBKW+JCNhQqdAr4YVvUxgRHS/eqAKlsG5VWDihAY7uoTfCCbsT0TZQdpo9m82UZrHQAUqhKFgUkrTShg4wFtpsNRSN5kC5yXSFNieihwdOK66DPcI9e2VKMA33NYGxUFgDUqz3mr4r4VtrZYpfDfW6TFdorUzxRaq42+4XiqYlYYQt0pJeG70R2uqmPjaFB9o12hGe2ClT7y0SeKlfox2hsLP7LhwhhVq7tdvCIxtJRPcZQJu5FoqahSQWsDs2iO9aaGHBwKcQ0EhvhBZmYjKz8EZovJ162Es2UCPtEYpDw2siei3U36/1CUXTaJ3itzPAFPYIjTYb/GX+NKzP9AqNHjE89KEC6LslNFinBfS5UPvgO1B4ZOrWDd1HEUV6SyiWzExFn+CZIXAx7BeKt0ay6OPvucGdtF8oaga6DXo/KuMSXKT9QgOXp4V3eKA4BhfpHSF5Q8W30TigG5pBQmIiDVDAgQOE4oJwLhIBEY1mkJCw3UQUc1DAzxXDhKJOsy76PtX7pMDD73ChmKAgek2a570C1UqHCMVeCt1vCnTvlYhzeqGcjLg0+h7RFGwHYrEYLhRLESKNhRpZhZoTxmkEGr0U1VsznYDvu+8Xir0mZCfuR9jb+zsB940QylJN6daqX6iTFqhpoTQ2dWrVi+rYa1HrQiHe1QqeEtKPUof0+YvjjVmhECcTzZFIP4rqlAuEXaGMo4mLKBqi9P2okDLHE+ZWi/54d1hLFWKnjDas/R1RFDXrS4Y/aII8+4UI4zjZWzqs1y6acVzUam8nTOPaYWTX9qACfpfIRYi4iGIihN94cxGK8Rcitt5MhIjlgokQcVHDRIhoNUyEiNMFFyF8InIRwtd8LkL4ishGCC5TNkLwows2QnA35SM8BvYaPkLoM0Q+QuhBn5EQmERGQuCCwUkISyInIaydshKCXjrhJYR8ccFLCLneZyYEfLzGTAjYgHMTinPdLLITal+d8hOWxl6oe7PIUKjZbTgK9RZ+lkItIk+hDpGpUGMuchWK/VnFVYOtUJQUfwyLr1CIA6VK5SwUywN+VHe8hKLUGJ1G3kKVNHIXjv6FT/7CUT+zOwbCET+VPBZCmcfz2WETckyEMpYbg36RPZ2e2U96ZHRRWm7k7ihnG0kPizgujxvpmVxutrNrnc2lkx6RiShdLh8fNNpvv79JYhL+D5k6kD9EZ3q4AAAAAElFTkSuQmCC',
    title: 'PMJDY',
    width: '40%',
    onClick: opt=1,
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'POLICY 2',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'POLICY 3',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          
          onClick={() => { opt= 1 }}
          
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    <div>
        <Grid item container>
            <Grid item xs={0} sm={3}/>
            <Grid item xs={12} sm={6}>
            <Paper >
            We are committed to creating an inclusive assessment process. In order to track the effectiveness of our assessments across a diverse set of candidates, we would like to understand how you identify yourself. Completing this survey is voluntary and will not impact the selection process in any way. Also, your information will not be shared with your interviewers. It will be used exclusively to assess our capabilities and enable companies to assess a diverse set of top talent.
            </Paper>

            </Grid>
            <Grid item xs={0} sm={3}/>
        </Grid>
        
    </div>
    </>
    
  );
}
