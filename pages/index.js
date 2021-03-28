import axios from 'axios'
import {useState, useEffect} from 'react'
import {
    makeStyles
} from '@material-ui/core'

import Header from './components/Header'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    toolbar:{
        minHeight: 50
    },
    main: {
        width: "100vh",
        padding: 24,
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
        <div className={classes.root}>
            <Header title={"Home"}/>
            <div className={classes.toolbar}></div>
            <div className={classes.main}>
                {
                    posts.map(post => <a key={`${post.id}`}>{post.title}</a>)
                }
            </div>
        </div>
    )
};

export default Home;