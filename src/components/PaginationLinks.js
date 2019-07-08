import React from "react"
import { Link } from "gatsby"

const PaginationLinks = ({ currentPage , numberOfPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const previousPage = currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/"+(currentPage + 1).toString()
    
    return (
        <nav className="pagination blog-pagination" role="navigation" aria-label="pagination">
            {isFirst ? <Link to="/blog" className="pagination-previous" disabled>Previous</Link>
            :<Link to={previousPage} className="pagination-previous">Previous</Link>}
            {isLast ? <Link to={numberOfPages!==1?"/blog/"+numberOfPages:"/blog/"} className="pagination-next" disabled>Next</Link>:
            <Link to={nextPage} className="pagination-next">Next</Link>}

            <ul className="pagination-list">
                {Array.from({length: numberOfPages},(_,i)=> currentPage === i + 1?(
                    <li key={i} ><Link to={`/${i === 0 ? "blog":"blog/"+(i+1)}/`} className="pagination-link is-current" aria-label={`Page ${i+1}`} aria-current="page">
                            {i+1}
                        </Link></li>
                ):(
                    <li key={i}><Link to={`/${i === 0 ? "blog":"blog/"+(i+1)}/`} className="pagination-link" aria-label={`Page ${i+1}`} aria-current="page">
                        {i+1}
                </Link></li>
                ))} 
            </ul>
        </nav>
    )
}

export default PaginationLinks