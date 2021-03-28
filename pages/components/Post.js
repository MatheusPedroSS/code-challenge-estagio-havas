import {
    ButtonBase,
    Box,
    makeStyles,
    SvgIcon,
} from '@material-ui/core'
import {Assignment} from '@material-ui/icons'
import Link from 'next/link'

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
    textTitle: {
        fontSize: 12,
        padding: 15,
        fontWeight: 'normal',
    }
})

function Post(props) {

    const classes = useStyles()

    const onPostClicked = () => {
        props.onPostClicked(props.post)
    }

    
    return (
        <Link href="/post/[id]" as={`/post/${props.post.id}`}>
            <ButtonBase onClick={onPostClicked} className={classes.root} disableTouchRipple={true}>
                <Box className={classes.box}>
                    <SvgIcon className={classes.icon}>
                        <Assignment />
                    </SvgIcon>
                    <spa className={classes.textTitle}>
                        {props.post.title}
                    </spa>
                </Box>
            </ButtonBase>
        </Link>
    )

}

export default Post;