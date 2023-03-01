import React from 'react'


const NewsItem = ({index, title, description, url, urlToImage}) => {
  return (
    <div className='flex justify-center max-w-sm rounded overflow-hidden shadow-lg h-full bg-gray-200 group-hover:blur-sm hover:!blur-none'>
      <div className='block bg-gray-100 max-w-sm max-h-128 rounded-lg shadow-lg dark:bg-neutral-700 mx-auto'>
        <img className="w-full h-48 object-cover" src={urlToImage} alt={urlToImage}/>
        <div className='p-6 h-128 mx-auto'>
          <h3 className="text-xl p-3 font-medium flex-1"><a href={url} >{title}</a></h3> 
          <div className='flex-col mx-auto'>
            <button className='rounded-x1.5 inline-block rounded bg-emerald-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white  shadow-emerald-500/20 transition-all hover:shadow-lg hover:shadow-green-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-32' data-ripple-light="true">Read me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem

{/* <div className='flex justify-center mx-auto mt-auto '>
                  <button  className="mt-4 mb-4 middle none center rounded-lg bg-emerald-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg hover:shadow-green-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-32" data-ripple-light="true">
                  Read More
                  </button>
            </div> */}