import {
    makeStyles,
} from '@material-ui/core'
import axios from 'axios';
import PostCardG from './PostCardG';

const useStyles = makeStyles({
    root: {
        padding: 30
    },
    post: {
        paddingTop: 30
    },
    readMore: {
        paddingTop: 40,
    },
    title: {
        paddingBottom: 40,
    }
})

const PostBody = (params) => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <div className={classes.post}>
                <PostCardG post={params.posts.postClicked} />
            </div>
            <div className={classes.readMore}>
                <h1 className={classes.title}>Leia Mais:</h1>
                {
                    params.posts.listPost.map(post => (
                        <PostCardG className={classes.title} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    const data = await res.data
  
    return {
      props: { props: { data } },
    }
}

export default PostBody;