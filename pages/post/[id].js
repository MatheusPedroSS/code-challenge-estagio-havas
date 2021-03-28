import axios from 'axios'
import { useRouter } from 'next/router';

function Post ({ post = {} }) {
    const router = useRouter();

    if(router.isFallback) return <h1>Carregando...</h1>

    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticProps(context) {

    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
            params: {
                id: context.params.id
            }
        }
    );
    const post = await response.data[0];

    return {
        props: { post, revalidate: 10 }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {

    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
    );
    const posts = await response.data.slice(0, 5);

    const paths = posts.map((post) => {
        return { params: {id: String(post.id)} }
    });

    return {
        paths,
        fallback: true
    };
}

export default Post