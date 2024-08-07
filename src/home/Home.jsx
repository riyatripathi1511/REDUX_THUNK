import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../reduxStore/reduxReducer';

export default function Home() {
    const state = useSelector(state => state.postReducerThunk)
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(fetchPost(dispatch), 1000)
    },[dispatch]);
    console.log(state);


    return (
        <div>Home</div>
    )
}
