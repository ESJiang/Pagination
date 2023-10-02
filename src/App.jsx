import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setLoading(false);
                setPosts(res.data);
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false);
            }
        })();
    }, []);

    const indexOfLastPosts = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPosts - postsPerPage;
    const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPosts);

    return loading ? (
        <div>Loading</div>
    ) : (
        <div className='container'>
            <h1>My Blog</h1>
            <Posts posts={currentPagePosts} />
            <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={pageNumber => setCurrentPage(pageNumber)} />
        </div>
    );
}
