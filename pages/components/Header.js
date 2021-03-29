import {
    AppBar,
    Toolbar,
    makeStyles,
    SvgIcon,
    ButtonBase,
} from '@material-ui/core'
import {Home} from '@material-ui/icons'

const useStyles = makeStyles({
    root:{
        minHeight: 40,
        display: 'flex'
    },
    iconHome: {
        display: 'flex',
        paddingRight: 25,
        alignItems: 'center'
    }
})

function Header(params) {

    const classes = useStyles();

    return(
        <AppBar position='fixed' className={classes.root}>
            <Toolbar>
                <ButtonBase onClick={params.clickedHome} disableTouchRipple={true}>
                    <SvgIcon className={classes.iconHome}>
                        <Home/>
                    </SvgIcon>
                </ButtonBase>
                <span>
                    <h3>{params.title}</h3>
                </span>
            </Toolbar>
        </AppBar>
    )

}

export default Header;