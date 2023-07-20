import { AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import classes from  './Layout.module.scss';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = (): JSX.Element => {
    return (
        <div className={classes.header} >
            <AppBar  className={classes.appbar} position="relative">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6">
                        Shunsuke Baba
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                        <Button component={Link} to="/" sx={{ color: '#000' }}>
                            HOME
                        </Button>
                        <Button component={Link} to="/about" sx={{ color: '#000' }}>
                            About
                        </Button>
                        <Button component={Link} to="/works" sx={{ color: '#000' }}>
                            Works
                        </Button>
                </Toolbar>
            </AppBar>
        </div>

    );
    };
