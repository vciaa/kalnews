import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import NewsItem from './NewsItem'

const NewsList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        const getArticles = async () =>{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=e11f15b8abc048118bbd416bf9b52d11');
            console.log(response);
            setArticles(response.data.articles)
        }
        
        getArticles();

    }, []);

  return (

    <div className="flex-col mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex-col container-news grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 group" >
          {articles.map((article, index) =>{
              
                      return(
                        <NewsItem
                          key={index}
                          title={article.title}
                          description={article.description}
                          url={article.url}
                          urlToImage={article.urlToImage}
                        />
                      )
                  })}
        </div>
    </div>
  )
}

export async function getStaticProps(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=e11f15b8abc048118bbd416bf9b52d11')
  
    const {articles} = await response.json()
    return{
      props: {
        articles
      }
    }
  }

export default NewsList