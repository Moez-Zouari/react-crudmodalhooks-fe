import React from 'react'

const ArticleList = ({ products }) => {
    return (
        <div>
            {products.map((pr))}
        </div>
    )
}

export default ArticleList
