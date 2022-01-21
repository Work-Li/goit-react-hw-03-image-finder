const API_KEY = '24192544-a81042c0a59826e332cc4d72c';
const BASE_URL = 'https://pixabay.com/api';

const  fetchImages = async (query, page) => {

    const response = await fetch( `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`, 
    ) 
    
    return response.json();

       
}

export default fetchImages;

// fetchImages = async () => {
//     const query = this.state.searchTerm ?? 'flowers';
//     const url = `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=${query}&image_type=photo`;
//     const { data } = await axios.get(url);
//     this.setState({ images: data.hits });
//   };