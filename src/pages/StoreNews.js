import React from 'react'
import useFetch from '../components/useFetch';
import Card from '../components/Card';

const StoreNews=() =>{

  const {data:news,isPending,error}=useFetch('http://localhost:8000/news');
  console.log(news); 

  return (
    <div>
        {error ? <div>{error}</div> : (isPending ? <div>Loading...</div> : (
        <>
        <div className="my-5">
          <h1 className="text-center">MY NEWS</h1>
        </div>

         <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {news.map((val, index) => {
                    return (
                      <Card
                        key={index}
                        imgsrc={val.url}
                        title={val.title}
                        url={val.link}
                        type={val.type}
                        id={val.id}
                        body={val.body}
                        author={val.author}
                        publishedAt={val.publishedAt}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          </>)
        
        
        )}
    </div>
  )
}

export default StoreNews