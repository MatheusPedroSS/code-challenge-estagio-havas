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
        borderRadius: 20
    },
    icon: {
        padding: 15,
        fontSize: 50,
        paddingBottom: 35,
    },
    textTitle: {
        fontSize: 12,
        padding: 15
    }
})

function Post(params) {

    const classes = useStyles()

    const onPostClicked = () => {
        params.onPostClicked(params.post)
    }

    
    return (
        <ButtonBase onClick={onPostClicked} className={classes.root} disableTouchRipple={true}>
            <Box className={classes.box}>
                <SvgIcon className={classes.icon}>
                    <Assignment />
                </SvgIcon>
                <span className={classes.textTitle}>
                    {params.post.title}
                </span>
            </Box>
        </ButtonBase>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { props: { data: getAllPosts() } },
    }
}

export default Post;