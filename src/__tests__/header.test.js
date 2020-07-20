import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from '../components/news/header';

test('renders header', () => {
    const { container, getByText } = render(<Header />)
    expect(getByText('Vote Count')).toBeInTheDocument()
    expect(getByText('News Details')).toBeInTheDocument()
    expect(getByText('UpVote')).toBeInTheDocument()
        expect(container.firstChild.firstChild).toMatchInlineSnapshot(`
      <th>
        Comments
      </th>
      `)
})
