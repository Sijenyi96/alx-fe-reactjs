import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const PostsComponent = () => {
    
    const { data: posts, isLoading, isError, error, } = useQuery('fetchPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    
    if (error) return <div>Error loading posts</div>
    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            {posts.map(posts => (
                <div key={posts.id}>{posts.name}</div>
            ))}
        </div>
    );
};

export default PostsComponent;