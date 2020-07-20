import React from 'react';
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Content } from '../content';


test('news item should contain number of up votes', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    const { container, getByTestId } = render(<Content news={{hits:[{
           objectID: 1,
            num_comments: 100,
            points: 200,
            _highlightResult: { author: { value: '' }}
        }
    ]}}/>,{
        container: document.body.appendChild(table).appendChild(tbody),
    });
    expect(getByTestId('up-votes-1').innerHTML).toEqual('200');
})

test('news item should contain number of comments', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    const { container, getByTestId } = render(<Content news={{hits:[{
         objectID: 1,
         num_comments: 100,
         points: 200,
         _highlightResult: { author: { value: '' }}
       }
    ]}}/>,{
        container: document.body.appendChild(table).appendChild(tbody),
    });
    expect(getByTestId('numberof-comments-1').innerHTML).toEqual('100');
})
