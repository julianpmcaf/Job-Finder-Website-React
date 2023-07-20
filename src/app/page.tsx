'use client';
import Navbar from '@/components/Navbar'
import Filters from '@/components/Filters'
import CardList from '@/components/CardList';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect, useContext } from 'react'
import { getJobs,getNavigation } from '@/api/ApiUtils';

import { CardProps } from '@/models/Interfaces';
export default function Home() {
  const [jobs, setJobs] = useState<CardProps[]>()
  const [navigation, setNavigation] = useState([])
  
  const fetchJobs = async (signal: AbortSignal) => {
    const data = await getJobs(signal)
    console.log(data)
    setJobs(data)
  }
  const fetchNavigation = async (signal: AbortSignal) => {
    const data = await getNavigation(signal)
    setNavigation(data)
  }
  useEffect(() => {
    let controller = new AbortController()
    fetchJobs(controller.signal)
    fetchNavigation(controller.signal)
    return () => {
      controller.abort();
    };
  }, []);


  return (
    <main >
      <Navbar navItems={navigation} location='NY New York'/>
      <Filters />
      <div id="content" className='flex gap-10 pt-10'>
        <div className='w-1/6'>
          <Sidebar />
        </div>
        <div className='w-5/6'>
            <CardList cards={jobs}/>
        </div>
      </div>
    </main>
  )
}
