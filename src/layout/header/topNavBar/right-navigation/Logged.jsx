import { Avatar, IconButton, Tooltip } from '@mui/material';
import { useMenu } from '../menu/MenuProvider';

const Logged = () => {
  const setOpen = useMenu();
  
  return (
    <Tooltip title='Open settings'>
      <IconButton
      sx={{p: 0, display: 'inline-flex', marginLeft: 2}}
      onClick={()=> setOpen(true)}>
        <Avatar alt='avatar' src='/images/avatar.png' />
      </IconButton>
      </Tooltip>
   
  )
};


export default Logged;


