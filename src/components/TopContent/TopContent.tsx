import React from 'react'
import TopContentTitle from './TopContentTitle/TopContentTitle'
import TopContentList from './TopContentList/TopContentList'
import TopContentText from './TopContentText/TopContentText'

export default function TopContent() {
    return(
        <section className='pt-48 text-white'>
            <TopContentTitle />
            <TopContentList />
            <TopContentText />
        </section>
    )
};
