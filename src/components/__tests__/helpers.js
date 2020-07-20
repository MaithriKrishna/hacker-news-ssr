import React from 'react';
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getDomainFromUrl,getFormattedTime } from '../helper';


test('extract website name from URL',()=> {
    expect(getDomainFromUrl('https://www.amazon.co.uk/some/random/url.html'))
    .toEqual('www.amazon.co.uk');
    expect(getDomainFromUrl('https://www.hackernews.com/some/random/url.html'))
    .toEqual('www.hackernews.com');
    expect(getDomainFromUrl('https://www.hackernews.com'))
    .toEqual('www.hackernews.com');
    expect(getDomainFromUrl('http://www.hackernews.com'))
    .toEqual('www.hackernews.com');
});

beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2020-07-20T12:40:25+00:00').getTime())
  })

test('extract website name from URL',()=> {
    expect(getFormattedTime('2020-07-20T12:23:10+00:00'))
    .toEqual('17 minutes');
});
