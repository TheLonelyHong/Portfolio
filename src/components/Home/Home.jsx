import React from 'react';
import Top from './Top';
import Profile from './Profile';
import Language from './Language';
import Projects from './Projects';
import Thoughts from './Thoughts';

const Home = () => {
  return (
    <div>
        <Top/>
        <Profile/>
        <Language/>
        <Projects/>
        <Thoughts/>
    </div>
  )
}

export default Home