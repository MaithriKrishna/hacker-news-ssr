import React from "react";
import { Link } from 'react-router-dom'

export const PaginationLinks = ({ page, nbPages, updateNews }) =>
  <div className="paginationLink">
    <Link
      to={`/hackerNews/${page - 1}`}
      onClick={() => updateNews(page - 1)}
      className={page ? '' : 'disableLink'}>
      Previous
    </Link>
    <span> | </span>
    <Link
      to={`/hackerNews/${page + 1}`}
      onClick={() => updateNews(page + 1)}
      className={page === nbPages - 1 ? 'disableLink' : ''}>
      Next
    </Link>
  </div>