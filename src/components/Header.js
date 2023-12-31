import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

function Header() {
    const classes = useStyles();
    return (
    <React.Fragment>
        <CssBaseline />
        <AppBar
            position="static"
            color="inherit"
            elevetion={0}
            className={classes.appBar}
        >
            <ToolBar>
                <Typography variant="h6" color="inherit" noWrap>
                    BlogmeUp
                </Typography>
            </ToolBar>
        </AppBar>
    </React.Fragment>
    );

}

export default Header;