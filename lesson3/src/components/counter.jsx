const { useState, useEffect } = require("react")

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState(null)

    // setCounter(counter + 1)

    const handleShowImage = async () => {
        const {url} = await fetch('https://picsum.photos/200/300')
        setImage(url)
    }

    

    useEffect(() => {
        handleShowImage()
    }, [counter])
    console.log(counter);

    return <>
        <h1>Counter: {counter}</h1>
        <img src={image} alt="" />
        <button
            className="bg-blue-400"
            onClick={() => setCounter(counter + 1)}>+ Counter</button>
    </>
}

export default Counter