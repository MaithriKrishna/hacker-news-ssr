import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from '../components/news/header';

test('renders header', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

    const { container, getByText } = render(<Header />,{
      container: document.body.appendChild(table).appendChild(tbody)
    });
    expect(getByText('Vote Count')).toBeInTheDocument()
    expect(getByText('News Details')).toBeInTheDocument()
    expect(getByText('UpVote')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
})
