import {
    makeStyles,
} from '@material-ui/core'
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        padding: 30
    },
    title: {
        paddingBottom: 40,
    },
    body: {
        paddingLeft: 30
    },
})

const PostBody = (params) => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <div>
                <h1 className={classes.title}>{params.posts.postClicked.title}</h1>
                <p className={classes.body}>{params.posts.postClicked.body}</p>
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