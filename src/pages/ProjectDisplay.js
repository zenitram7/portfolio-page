import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <a href={project.pLink}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    src={project.image}
                    alt='projectimage'

                />
            </a>
            <div className='separatorpd'>
                <p>
                    <b>{project.skills}</b>
                </p>
            </div>
            <div className='go-back'>
                <Link to='#' onClick={() => window.history.back()}>
                    « Back
                </Link>
            </div>
        </div>
    )
}

export default ProjectDisplay;
