
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, IconButton} from '@mui/material'
import AttachmentIcon from '@mui/icons-material/Attachment';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';


const Contacto = () => {
    const handleLinkedin = () =>{
      window.open('https://www.linkedin.com/in/javier-lopez-aliste/', '_blank');
      }
      const handleGitHub = () => {
        window.open('https://github.com/javierignacioLA', '_blank');
      }
      const handleDownload = () => {
        window.open('https://drive.google.com/file/d/13l17_o1FZSzD01PCDVKlvYnf5OfWctxz/view?usp=sharing', '_blank');

      };
      const handleCorreo = () => {
        window.open ('mailto:javierlopzaliste@gmail.com?subject=Oferta Laboral')

      };
  return (
    <div style={{transform: "scale(1.2)"}}><Typography variant='h6' component='div'> Twitter Card, Contacto:</Typography>
    <IconButton aria-label="delete" color="primary">
        <LinkedInIcon color='secondary' onClick={handleLinkedin}/>
    </IconButton>
    <IconButton aria-label="delete" color="primary">
        <GitHubIcon  color='secondary'onClick={handleGitHub}/>
    </IconButton>
    <IconButton aria-label="delete" color="primary">
        <AttachmentIcon  color='secondary' onClick={handleDownload}/>
    </IconButton>
    <IconButton aria-label="delete" color="primary">
        <MailIcon  color='secondary' onClick={handleCorreo}/>
    </IconButton>
    
    </div>
    
  )
}

export default Contacto