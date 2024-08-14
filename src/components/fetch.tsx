import { useState, useEffect } from 'react';



const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
    id: Number;
    title: String;
}

export default function showUsers() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const posts = await response.json() as Post[];
                setPosts(posts);
            }   catch (e: any) {
                setError(e);
            }   finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading){
        // return <<div>Loading...</div>>
    }

    // if (error) {
    //     return <p>Cos poszło zle</p>
    // }

    return (
        <div className='tutorial'>
            <h1 className='#'>Pierwszy Fetch</h1>
            <ul>{posts.map((post) => {
                return <li key={post.id}>{post.title}</li>;
            })}
                </ul>
        </div>
    );
}