const baseUrl = "https://acb-api.algoritmika.org/api/movies/list"

export const getListMovies = async (listId) => {
    try {
        const res = await fetch(`${baseUrl}/${listId}`);
        const data = await res.json();
        return data
    } catch (error) {
        alert("error: ", error)
    }

}