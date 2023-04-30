import { useState, useEffect } from 'react';
import {fetchImages}  from ' services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { AppContainer } from './App.styled';


export const App = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [status, setStatus] = useState('idle');
 
  useEffect(() => {
    if (!query) {
      return;
    }
   setStatus('pending');

   
    fetchImages(query, page)
    .then(({ data }) => {
        if (data.hits <= 0) {
          toast.info(`No result found for ${query}`);
          setStatus('rejected');
          return;

        } else if (page === 1) {
          toast.info(`Found "${data.total}" images`);
        }

        setItems(state => (page > 1 ? [...state, ...data.hits] : data.hits));
        setTotalHits(data.total);
        setStatus('resolved');
      })
      .catch((error) => {
        setStatus('rejected');
      });
  }, [page, query]);

  const handleSubmit = newSearch => {
    if (query !== newSearch) {
      setQuery(newSearch);
      setItems([]);
      setPage(1);
    }
  };
    const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    };
  
  
  return (
    <AppContainer>
      <Searchbar onSubmit={handleSubmit} />

      {items.length > 0 && <ImageGallery items={items} />}

      {status === 'pending' && <Loader />}

      {status === 'resolved' && (page * 12 < totalHits ? true : false) && (
        <Button onClick={onLoadMore} />
      )}

      {status === 'rejected' && (
        <>
         <p>Something wrong, try later</p>
        </>
      )}

      <ToastContainer autoClose={3000} />
    </AppContainer>
  );
}
