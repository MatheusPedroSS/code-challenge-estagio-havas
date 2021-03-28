import {
    ButtonBase,
    Box,
    makeStyles,
    SvgIcon,
} from '@material-ui/core'
import {Assignment} from '@material-ui/icons'

const useStyles = makeStyles({
    root:{
        margin: 20
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        background: '#d2d2d2',
        width: 360,
        height: 180,
        boxShadow: 10,
        borderRadius: 20
    },
    icon: {
        padding: 15,
        fontSize: 50,
        paddingBottom: 35,
    },
    title: {
        fontSize: 12,
        padding: 15,
        fontWeight: 'normal',
    }
})

function Post(props) {

    const classes = useStyles()

    return (
        <ButtonBase className={classes.root} disableTouchRipple={true}>
            <Box className={classes.box}>
                <SvgIcon className={classes.icon}>
                    <Assignment />
                </SvgIcon>
                <spa className={classes.title}>
                    {props.postTitle}
                </spa>
            </Box>
        </ButtonBase>
    )

}

export default Post;