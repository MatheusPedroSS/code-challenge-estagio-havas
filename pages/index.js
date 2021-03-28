import axios from 'axios'
import {useState, useEffect} from 'react'
import {
    makeStyles,
    Box
} from '@material-ui/core'
import Link from 'next/link'

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

    const clickedPost = async (post) => {
        <Link href="/post/[id]" as={`/post/${post.id}`} />
        console.log(post)
    }

    return(
        <Box className={classes.root}>
            <Header title={"Home"}/>
            <div className={classes.toolbar}></div>
            <Box flexGrow={1}>
                {
                    posts.map(post => <Post onPostClicked={clickedPost} className={classes.post} post={post} key={`${post.id}`} />)
                }
            </Box>
        </Box>
    )
};

export default Home;