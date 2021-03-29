import {
    makeStyles,
} from '@material-ui/core'

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

function PostBody (params){

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <div>
                <h1 className={classes.title}>{params.post.postClicked.title}</h1>
                <p className={classes.body}>{params.post.postClicked.body}</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default PostBody;