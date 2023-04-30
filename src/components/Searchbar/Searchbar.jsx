import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { Header, Form, FormButton, FormInput } from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState('');
  

   const onChangeInput = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    const onSubmitForm = e => {
        e.preventDefault();

            if (query.trim() === '') {
            toast.error('Enter a valid query');
            return;
            }
        onSubmit(query);
        // чистить інпут після сабміту
        setQuery('');
     
    };


        return (
            <Header>
                <Form onSubmit={onSubmitForm}>
                <FormButton type="submit">
                    <ImSearch size={25} />
                </FormButton>

                    <FormInput
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={onChangeInput}
                />
                </Form>
            </Header>
        );
    }


Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};