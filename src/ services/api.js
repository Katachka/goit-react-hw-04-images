import axios from 'axios';

export async function fetchImages(query, page) {
  const searchParams = new URLSearchParams({
    key: '34294435-d3446f23ab07641a2c4369356',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const data = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return data;
}
