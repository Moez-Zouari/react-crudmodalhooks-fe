import React, { useEffect, useState } from 'react'
import { fetchArticles } from './../../Services/ArticleService';
import ArticleList from './ArticleList';


const ArticleApp = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    listproduits()
  }, [products])

  const listproduits = () => {
    fetchArticles()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <ArticleList products={products} />
    </div>
  )
}

export default ArticleApp
