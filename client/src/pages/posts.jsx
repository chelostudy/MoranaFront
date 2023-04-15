import {useEffect, useMemo, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/buttons/myButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const searchedAndSortedPosts = usePosts(posts,filter.sort,filter.query)
    const lastElement = useRef();
    const observer = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        console.log(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useEffect(() => {
        if(isPostsLoading) return;
        if(observer.current) observer.current.disconnect();
        var callback = function (entries, observer) {
            if(entries[0].isIntersecting && page < totalPages){
                setPage(page+1)
            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)
    },[isPostsLoading])

    useEffect(()=> {
        fetchPosts(limit, page)
    }, [page])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <MyButton style={{marginTop : 30}} onClick ={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create ={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={searchedAndSortedPosts} title={'Posts about JS'}/>
            <div ref={lastElement} style={{height: 10, background: "none"}}/>
            {isPostsLoading &&
                 <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
            }
        </div>
    );
}

export default Posts;
