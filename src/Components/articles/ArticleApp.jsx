import React, { useEffect, useState } from 'react'
import { deleteArticle, fetchArticles } from './../../Services/ArticleService';
import ArticleList from './ArticleList';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


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

  const addproduct = (newproduit) => {
    setProducts([newproduit, ...products])
  }

  const updateProduct = (prmod) => {
    setProducts(
      products.map((product) =>
        product._id === prmod._id ? prmod : product
      )
    );
  };


  const deleteProduct = (productId, ref) => {
    confirmAlert({
      title: "Confirm delete...",
      message: " supprimer l' article: " + ref,
      buttons: [
        {
          label: 'Oui',
          onClick: () => deleteArticle(productId)
            .then(res =>
              setProducts(products.filter((product) => product._id !== productId)))
            //.then(console.log("suppression effectuée avec success"))
            .catch(error => console.log(error))
        },
        {
          label: 'Non',
        }
      ]
    });

  };

  return (
    <div>
      <ArticleList products={products} deleteProduct={deleteProduct} />
    </div>
  )
}

export default ArticleApp
