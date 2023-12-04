import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import css from './form.module.css';

export const FormSearch = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  // const [SearchParams, setSearchParams] = useSearchParams()

  const onInputChange = event => {
    setQuery(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <input
        className={css.input}
        name="name"
        type="text"
        value={query}
        onChange={onInputChange}
      />
      <button type="button" className={css.button}>
        Search
      </button>
    </form>
  );
};
