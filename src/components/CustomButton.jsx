import { Button } from '@mui/material';
import styled from '@emotion/styled';

const CustomButton = styled(Button)(() => ({
  cursor: 'pointer',
  marginLeft: '16px',
  borderRadius: '999px',
  padding: '4px 12px',
  fontWeight: 'bold',
  color: 'black',
  fontSize: '0.8rem',
  border: '1px solid #000',
  backgroundColor: '#fff',
  textTransform: 'none',
  transition: '.3s ease background-color',
  '&:hover': {
    opacity: 0.8,
  },
  '&.is-following': {
    border: '1px solid #bbb',
    background: 'transparent',
    color: '#fff',
    width: '100px',
  },
  '&.dark': {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #000',
  },
  '&.white': {
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
  },
}));

export default CustomButton;
