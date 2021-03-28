import {
    AppBar,
    Toolbar,
    makeStyles,
    SvgIcon,
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

function Header(props) {

    const classes = useStyles();

    return(
        <AppBar position='fixed' className={classes.root}>
            <Toolbar>
                <SvgIcon className={classes.iconHome}>
                    <Home/>
                </SvgIcon>
                <span>
                    <h3>{props.title}</h3>
                </span>
            </Toolbar>
        </AppBar>
    )

}

export default Header;