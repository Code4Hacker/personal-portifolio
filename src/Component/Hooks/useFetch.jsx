import { useEffect, useState } from "react";

const UseFetch = (API) => {
    const [post,setPost] = useState([]);
    useEffect(() => {
        const find_data = async() => {
            const response = await fetch(API);
            const data = await response.json();
            setPost(data.data);
        }
        find_data();
    },[API]);
    return {post}
}
export default UseFetch;