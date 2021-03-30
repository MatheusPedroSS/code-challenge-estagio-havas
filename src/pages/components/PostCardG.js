import {
    Box,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        display: 'flex',
        minHeight: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d2d2d2',
        width: '100%',
        borderRadius: 25,
        marginTop: 25,
    },
    title: {
        padding: 20
    },
    body: {
        fontSize: 18,
        padding: 35,
    }
})

function PostCardG(params) {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <h1 className={classes.title}>{params.post.title}</h1>
            <p className={classes.body}>{params.post.body}</p>
        </Box>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { props: { data: getAllPosts() } },
    }
}

export default PostCardG;