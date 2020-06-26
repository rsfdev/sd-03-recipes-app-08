import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HeaderSearchBar from '../components/HeaderSearchBar';

describe('Testes do componente HeaderSearchBar', () => {
  beforeEach(cleanup);

  test('Elementos obrigatórios estão presentes na página', () => {
    const { getAllByRole, queryByRole, queryByTestId } = render(
      <HeaderSearchBar />,
    );
    const requiredSearchInput = queryByTestId('search-input');
    const requiredSubmitButton = queryByRole('button');
    const requiredRadioButtons = getAllByRole('radio');

    expect(requiredSearchInput).toBeInTheDocument();
    expect(requiredSearchInput.placeholder).toBe('Buscar Receita');
    expect(requiredSubmitButton).toBeInTheDocument();
    expect(requiredRadioButtons.length).toBe(3);
  });

  test('Elementos obrigatórios possuem testids corretas', () => {
    const { queryByTestId } = render(<HeaderSearchBar />);
    const requiredSearchInput = queryByTestId('search-input');
    const requiredSubmitButton = queryByTestId('exec-search-btn');
    const requiredIngredientSearchSelector = queryByTestId(
      'ingredient-search-radio',
    );
    const requiredNameSearchSelector = queryByTestId('name-search-radio');
    const requiredFirstLetterSearchselector = queryByTestId(
      'first-letter-search-radio',
    );

    expect(requiredSearchInput).toBeInTheDocument();
    expect(requiredSubmitButton).toBeInTheDocument();
    expect(requiredIngredientSearchSelector).toBeInTheDocument();
    expect(requiredNameSearchSelector).toBeInTheDocument();
    expect(requiredFirstLetterSearchselector).toBeInTheDocument();
  });
});
