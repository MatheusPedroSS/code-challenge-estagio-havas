import { Box, makeStyles } from "@material-ui/core";
import Post from './Post'

const useStyles = makeStyles({
    root: {
        padding: 20,
        maxHeight: "100vh",
        display: 'box',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function Body(params) {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
                {
                    params.posts.map(post => (
                        <Post onPostClicked={params.clickedPost} className={classes.post} post={post} key={`${post.id}`} 
                    />))
                }
        </Box>
    )
}

export default Body;