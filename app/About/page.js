import React from 'react';
import Abouts from '../../Components/About/page'
import  Details  from '../../Components/Details/page';
import StrategicGoals from '../../Components/StrategicGoals/page';
import  Certifcate  from '../../Components/Certifiation/page';
import Documents from '../../Components/Document/page'
const About = () => {
    return (
        <div>   
                <div className='py-12 '>
                <StrategicGoals/>
                </div>
                <Abouts/>

                 <div className='py-12'>
                        <Certifcate />
                        <Documents />
                      <Details />
                 </div>
        </div>
    );
}

export default About;
