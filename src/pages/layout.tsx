import styles from '@/styles/layout.module.css'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material';

const Layout = ({ children }: {children: any}) => {
  return (
    <>
      <div className={`${styles.home}`}>
        <div className={`${styles.header}`}>
          <FormControl size="small" sx={{ m: 3, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="search">Password</InputLabel>
            <OutlinedInput
              id="search"
              type="text"
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => null}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
        </div>
        <div className={`${styles.content}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;