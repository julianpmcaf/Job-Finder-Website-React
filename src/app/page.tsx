'use client';
import Navbar from '@/components/Navbar'
import Filters from '@/components/Filters'
import CardList from '@/components/CardList';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react'
import { getJobs,getNavigation } from '@/api/ApiUtils';

import { CardProps } from '@/models/Interfaces';
export default function Home() {
  const [jobs, setJobs] = useState<CardProps[]>()
  const [currJobs, setCurrJobs] = useState<CardProps[]>()
  const [navigation, setNavigation] = useState([])
  const [formData, setFormData] = useState()
  const [from, setFrom] = useState<number>()
  const [to, setTo] = useState<number>()
  
  useEffect(() => {
    let controller = new AbortController()
    fetchJobs(controller.signal)
    fetchNavigation(controller.signal)
    return () => {
      controller.abort();
    };
  }, []);
  
  useEffect(() => {
    console.log(from)
    console.log(to)
    setCurrJobs(jobs?.filter(obj => obj.rate >= from && obj.rate <= to))
  }, [from, to]);

  
  const fetchJobs = async (signal: AbortSignal) => {
    const data = await getJobs(signal)
    setCurrJobs(data)
    setJobs(data)
  }

  const fetchNavigation = async (signal: AbortSignal) => {
    const data = await getNavigation(signal)
    setNavigation(data)
  }


  const getMaxRate = () => {
    return jobs?.reduce(function(prev, current) {
      return (prev.rate > current.rate) ? prev : current
    })
  }
  const getMinRate = () => {
    return jobs?.reduce(function(prev, current) {
      return (prev.rate < current.rate) ? prev : current
    })
  }

  const sidebarForm = (data) => {
    setFormData(data)
    // Do stuff with the form data here e.g. send a POST request
    if (data.get('part_time')) {
      console.log("Potato")
    }
  }

  const filters = (from, to) => {
    setFrom(from)
    setTo(to)
  }

  return (
    <main>
      <Navbar navItems={navigation} location='NY New York'/>
      <Filters data={filters} from={getMinRate()?.rate} to={getMaxRate()?.rate}/>
      <div id="content" className='flex gap-10 pt-10'>
        <div className='w-1/6'>
          <Sidebar data={sidebarForm}/>
        </div>
        <div className='w-5/6'>
            <CardList cards={currJobs}/>
        </div>
      </div>
    </main>
  )
}
