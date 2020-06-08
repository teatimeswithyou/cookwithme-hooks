import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { getRecipesRequest } from '../../store/actions/recipesActions';
import { Container, Input, Icon } from './Search-styles';
import { useHistory } from 'react-router-dom';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');

  let history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    if (inputValue) {
      dispatch(getRecipesRequest(inputValue));
      setInputValue('');
      history.push('/');
    }
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
    debounceClick();
  };

  const debounceClick = debounce(handleClick, 350);

  return (
    <Container>
      <Icon onClick={handleClick} />
      <Input placeholder="Search…" onChange={handleChange} />
    </Container>
  );
};
