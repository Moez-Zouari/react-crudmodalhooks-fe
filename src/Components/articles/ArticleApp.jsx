import React, { useEffect, useState } from 'react'

import ArticleList from './ArticleList'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { fetchSCategories } from '../../Services/ScategorieService';
import CreateArticle from './CreateArticle'
import { fetchArticles, deleteArticle } from '../../Services/ArticleService';

const ArticlesApp = () => {
  const [products, setProducts] = useState(null)
  const [scategories, setScategories] = useState([])
  useEffect(() => {
    listproduits()
    listscategories()
  }, [])
  const listproduits = () => {
    fetchArticles()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }
  const listscategories = () => {
    fetchSCategories()
      .then(res => setScategories(res.data))
      .catch(err => console.log(err))
  }
  const addproduct = (newProduct) => {
    setProducts([newProduct, ...products])
  }

  const updateProduct = (prmod) => {
    setProducts(
      products.map((product) =>
        product._id === prmod._id ? prmod : product
      )
    );
  }

  const deleteProduct = (productId, des) => {
    confirmAlert({
      title: "Confirm delete...",
      message: " supprimer l' article: " + des,
      buttons: [
        {
          label: 'Oui',
          onClick: () => deleteArticle(productId)
            .then(res => setProducts(products.filter((product) => product._id !== productId)))
            //.then(console.log("suppression effectuée avec success"))
            .catch(error => console.log(error))
        },
        {
          label: 'Non',
        }
      ]
    });
  }
  return (
    <>
      <CreateArticle scategories={scategories} addProduct={addproduct} />
      <ArticleList products={products} deleteProduct={deleteProduct} scategories={scategories} />
    </>
  )
}

export default ArticlesApp
