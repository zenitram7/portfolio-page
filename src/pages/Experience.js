import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ComputerIcon from '@mui/icons-material/Computer';

const Experience = () => {
    return (
        <div className='experience'>
            <div className='title'>Experience</div>
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2022-2023'
                    iconStyle={{ background: 'black', color: 'white' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Nucamp Coding Bootcamp, Hybrid Online</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2023-present'
                    iconStyle={{ background: 'black', color: 'white' }}
                    icon={<ComputerIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        EverBlack Designs, <i>Ashland, Oregon</i>
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2020-present'
                    iconStyle={{ background: 'black', color: 'white' }}
                    icon={<LocalShippingIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        FedEx Ground, <i>Central Point, Oregon</i>
                    </h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
