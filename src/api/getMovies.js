const baseUrl = "http://www.omdbapi.com/"

export const getMovies = async (searchText, movieId='') => {
    const queryArr = []
    if (searchText) {
        queryArr.push(`s=${searchText}`)
    }
    if (movieId) {
        queryArr.push(`i=${movieId}`)
    }
    const queryString = queryArr.join('&')
    try {
        const res = await fetch(`${baseUrl}${queryString ? `?${queryString}` : ''}&apikey=737aa485`);
        const data = await res.json();
        return data
    } catch (error) {
        alert("error: ", error)
    }

}