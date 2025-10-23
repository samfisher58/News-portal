import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import RightAside from '../component/homelayout/RightAside';
import NewsDetailsCard from '../component/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    useEffect((()=>{
        
        const newsDetails=data.find(singleNews=>singleNews.id == id)
        setNews(newsDetails)
        
    }),[data,id])
    // console.log(data, id , news);
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className='font-bold mb-5 col-span-9'>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;