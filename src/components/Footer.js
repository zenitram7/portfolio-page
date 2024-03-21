import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css';


const Footer = () => {
    const gitHubLink = 'https://github.com/zenitram7';
    const myEmail = 'luismartinezconnect@gmail.com';
    const linkedInLink = 'https://www.linkedin.com/in/luisthedev/'
    const instagramLink = 'https://www.instagram.com/everblackdesigns'


    const handleEmailClick = () => {
        window.location.href = `mailto:${myEmail}`;
    }

    return (
        <div className='footer'>
            <div className='socialMedia'>
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
            <p> &copy; 2024 luisthedev.com</p>
        </div>
    )
}

export default Footer
