import React, { useEffect, useState } from "react"
export const Joke = () => {
    const [chuckNorrisJoke, setChuckNorrisJoke] = useState()
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        if (!response.ok) {
            throw new Error('Wystąpił błąd podczas wysyłania żądania.');
        }
        return response.json();
        })
        .then(data => {
            console.log('Odpowiedź serwera:', data.value);
            setChuckNorrisJoke(data.value)
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    
    return<>
        <p>{chuckNorrisJoke}</p>
    </>
}