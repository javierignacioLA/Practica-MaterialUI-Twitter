
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import '../About.css'
import { useState } from 'react';
import {Typography } from '@mui/material'
import styled from '@emotion/styled';
import CustomButton from './CustomButton';
import { useTheme } from '@mui/material/styles';

const About = ({name, username}) => {
  const theme = useTheme()
  const [follow, setFollow] = useState(true)
  const handleFollow = () => {
    setFollow(!follow)
  }
  const Span =  styled ('span') ({
    display: 'flex',
    flexDirection: 'column',
    opacity: .6,
    color: theme.palette.mode === 'dark' ? '#0e76a8' : '#f12'

  })
  return (
    <div >
      <div className='contenedor'>
      <div className='tw-followCard'>
        <header className='tw-followCard-header'>
        <Avatar src='https://media.licdn.com/dms/image/D4E03AQGZ49dV8wJozw/profile-displayphoto-shrink_800_800/0/1677692152138?e=1689206400&v=beta&t=iwymJ13ir7vN2M5QSjw6f7XEqllWxe9xk4wzhNc6p0c'
        alt={name}/>
        </header>
        <div className='tw-followCard-info'>
          <div className='tw-followCard-names'>
          <Typography fontSize={12.4} color={theme.palette.mode === 'dark' ? '#0e76a8' : 'black'} >{name}</Typography>
        <Span>{username}</Span>
        
          </div>
          <aside>
          <CustomButton onClick={handleFollow} className={`${follow ? 'tw-followCard-button' : 'tw-followCard-button is-following'} ${theme.palette.mode === 'dark' ? 'dark' : 'white'}`}>
            {follow ? 'Seguir' : 'Siguiendo'}
          </CustomButton>

          </aside>
        </div>
        
      </div>
      </div>
      
    
    </div>
  )
}
About.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default About