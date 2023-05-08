
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import '../About.css'
import { useState } from 'react';

const About = ({name, username}) => {
  const [follow, setFollow] = useState(true)
  const claseBoton = follow? 
  'tw-followCard-button'
  :'tw-followCard-button is-following'
  const handleFollow = () => {
    setFollow(!follow)
  }
  
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
          <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>{username}</span>
        
          </div>
          <aside>
            <button className={claseBoton} onClick={handleFollow}>{follow? 'Seguir': 'Siguiendo'}</button>
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