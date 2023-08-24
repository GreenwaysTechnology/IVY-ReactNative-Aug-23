import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

//state + event handling inside functoins 
const Review = props => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const onIncrement = () => {
        setLike(like + 1)
    }
    return <>
        <h1>Like {like} dislike {dislike}</h1>
        <button onClick={onIncrement}>Like</button>
        <button onClick={() => { setDislike(dislike + 1) }}>Dislike</button>

    </>
}


const App = () => <div>
    <Review />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)