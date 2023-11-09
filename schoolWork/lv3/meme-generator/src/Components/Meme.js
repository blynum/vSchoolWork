import React, { useEffect } from "react"
// import memesData from "../memeData"

function Meme() {
    /**
        * Challenge: 
        * As soon as the Meme component loads the first time,
        * make an API call to "https://api.imgflip.com/get_memes".
        * 
        * When the data comes in, save just the memes array part
        * of that data to the `allMemes` state
        * 
        * Think about if there are any dependencies that, if they
        * changed, you'd want to cause to re-run this function.
        * 
        * Hint: for now, don't try to use an async/await function.
        * Instead, use `.then()` blocks to resolve the promises
        * from using `fetch`. We'll learn why after this challenge.
        */


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [allMemeImages, setAllMemeImages] = React.useState([])

    /**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. 
*/

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    console.log(allMemeImages)


    function getMemeImage() {
        // const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        // const url = 
        // console.log(url)
    }



    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }




    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} />

                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottonText}
                    onChange={handleChange} />

                <button
                    onClick={getMemeImage}
                    className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>



        </main>
    )
}

export default Meme