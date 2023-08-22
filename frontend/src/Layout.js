import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      {children}
    </Box>
  )
}

export default Layout