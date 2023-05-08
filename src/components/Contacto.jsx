import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, IconButton} from '@mui/material'
import AttachmentIcon from '@mui/icons-material/Attachment';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contacto = () => {
    const handleLinkedin = () =>{
      window.open('https://www.linkedin.com/in/javier-lopez-aliste/', '_blank');
      }
      const handleGitHub = () => {
        window.open('https://github.com/javierignacioLA', '_blank');
      }
      const handleTwitter = () => {
        window.open('https://twitter.com/javierlopezA99', '_blank');
      }
      const handleDownload = () => {
        window.open('https://drive.google.com/file/d/13l17_o1FZSzD01PCDVKlvYnf5OfWctxz/view?usp=sharing', '_blank');

      };
  return (
    <div><Typography variant='h6' component='div'> Twitter Card, Contacto:</Typography>
    <IconButton aria-label="delete"  color="primary">
        <TwitterIcon onClick={handleTwitter}/>
    </IconButton>
    <IconButton aria-label="delete" color="primary">
        <LinkedInIcon onClick={handleLinkedin}/>
    </IconButton>
    <IconButton aria-label="delete" color="primary">
        <GitHubIcon onClick={handleGitHub}/>
    </IconButton>
    <IconButton aria-label="delete" color="primary">
        <AttachmentIcon onClick={handleDownload}/>
    </IconButton>
    
    </div>
    
  )
}

export default Contacto