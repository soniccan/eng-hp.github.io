import { AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import classes from  './Layout.module.scss';



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
                    <Box sx={{ display: { xs: 'none', sm: 'block', } }} >

                        <Button href="/eng-hp.github.io/" sx={{ color: '#000' }}>
                            HOME
                        </Button>
                        <Button href="/eng-hp.github.io/about" sx={{ color: '#000' }}>
                            About
                        </Button>
                        <Button href="/eng-hp.github.io/works" sx={{ color: '#000' }}>
                            Works
                        </Button>

                    </Box>
                </Toolbar>
            </AppBar>
        </div>

    );
    };
