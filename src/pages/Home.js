import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import reactIcon from '../assets/icons8-react-js-40.png';
import htmlIcon from '../assets/icons8-html-48.png';
import cssIcon from '../assets/icons8-css-48.png';
import wordpressIcon from '../assets/icons8-wordpress-50.png';
import javascriptIcon from '../assets/icons8-javascript-48.png';
import tailwindCss from '../assets/icons8-tailwind-css-48.png';
import bootstrapIcon from '../assets/icons8-bootstrap-48.png';
import materialUi from '../assets/materialui.png';
import '../styles/Home.css';
import MyImage from '../assets/luisM.png';


const Home = () => {
    const myEmail = 'luismartinezconnect@gmail.com';
    const gitHubLink = 'https://github.com/zenitram7';
    const linkedInLink = 'https://www.linkedin.com/in/luisthedev/'
    const instagramLink = 'https://www.instagram.com/everblackdesigns'
    const resumeLink = 'https://drive.google.com/file/d/1QsX40-59P4yoCEgL4M2iwOomoeA_rR01/view?usp=drive_link';
    const handleEmailClick = () => {
        window.location.href = `mailto:${myEmail}`;
    }
    const myResume = () => {
        window.location.href = resumeLink
    }

    return (
        <div className='home'>
            <div className='about'>
                <h2>Luis Martinez</h2>
                <div className='prompt'>
                    <p>Software Engineer</p>
                    <a href={gitHubLink} target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon />
                    </a>
                    <a href={`mailto:${myEmail}?cc=${myEmail}`} onClick={handleEmailClick}>
                        <EmailIcon />
                    </a>
                    <a href={linkedInLink} target='_blank' rel='noreferrer'>
                        <LinkedInIcon />
                    </a>
                    <a href={instagramLink} target='_blank' rel='noreferrer'>
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <div className='aboutme'>
                <h1>About Me</h1>
                <div className='list'>
                    <img src={MyImage} alt='a dev' />
                    <div className='separator'>
                        <li className='item'>
                            <span>
                                Hello! I'm Luis, A Software Engineer with a front-end
                                focus based in the San Francisco Bay Area. I enjoy working
                                with HTML, Javascript, React, CSS, TailWind, MaterialUI, Bootstrap & more.
                                I also have familiarity with WordPress using Divi and the Elegant Themes Ecosystem. When I'm
                                not coding, I'm either doing Jiu Jitsu or playing drums!
                            </span>
                        </li>
                    </div>
                    <div className='separator'></div>
                    <div className='cta-buttons'>
                        <button onClick={myResume}>My Resume</button>
                        <button onClick={handleEmailClick}>Hire Me</button>
                    </div>
                    <div className='title-3'><b>Tech Stacks</b></div>
                    <div className='tech-icons'>
                        <img src={htmlIcon} alt='html' />
                        <img src={cssIcon} alt='css' />
                        <img src={javascriptIcon} alt='javascript' />
                        <img src={reactIcon} alt='react' />
                        <img src={tailwindCss} alt='tailwind' />
                        <img src={bootstrapIcon} alt='bootstrap' />
                        <img src={wordpressIcon} alt='wordpress' />
                        <img src={materialUi} alt='materialui' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
