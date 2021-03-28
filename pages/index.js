import axios from 'axios'
import {useState, useEffect} from 'react'
import {
    makeStyles,
    Box
} from '@material-ui/core'

import Header from './components/Header'
import Post from './components/Post'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center'
    },
    toolbar:{
        minHeight: 50
    },
    post: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

function Home() {

    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const urlApi = 'https://jsonplaceholder.typicode.com/posts';

    const getPosts = async () => {
        const response = await axios(urlApi);
        const data = await response.data;

        setPosts(data)
    };

    useEffect(() => {
        getPosts()
    }, [])

    return(
        <Box className={classes.root}>
            <Header title={"Home"}/>
            <div className={classes.toolbar}></div>
            <Box flexGrow={1}>
                {
                    posts.map(post => <Post className={classes.post} postTitle={post.title} key={`${post.id}`} />)
                }
            </Box>
        </Box>
    )
};

export default Home;