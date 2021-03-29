import axios from 'axios'
import {useState, useEffect} from 'react'
import {
    makeStyles,
    Box
} from '@material-ui/core'

import Header from './components/Header'
import Body from './components/Body'
import PostBody from './components/PostBody'

const useStyles = makeStyles({
    toolbar:{
        display: 'flex',
        flex: 1,
        height: 50
    },
})

function Home() {

    const classes = useStyles();

    const [posts, setPosts] = useState([]);
    const [clickedP, setClickedP] = useState({postClicked: null});

    const urlApi = 'https://jsonplaceholder.typicode.com/posts';

    const getPosts = async () => {
        const response = await axios(urlApi);
        const data = await response.data;

        setPosts(data)
    };

    useEffect(() => {
        getPosts()
    }, [])

    const clickedPost = (post) => {
        const listPost = posts.filter(p => (post.id <= 4) ? (p.id >= 0 && p.id <= 5 && p.id != post.id) : (p.id >= 0 && p.id <= 4))
        setClickedP({
            postClicked: post,
            listPost
        })
    }

    return(
        <div>
            <div className={classes.toolbar}>
                <Header title={"Home"}/>
            </div>
            <div>
                {
                    clickedP.postClicked === null ? 
                        <Body posts={posts} clickedPost={clickedPost}/> :
                        <PostBody posts={clickedP}/>
                }
            </div>
        </div>
    )
};

export default Home;