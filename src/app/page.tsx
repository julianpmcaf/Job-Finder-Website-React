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
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(100)
  
  const fetchJobs = async (signal: AbortSignal) => {
    const data = await getJobs(signal)
    setCurrJobs(data)
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
  
  useEffect(() => {
    setCurrJobs(jobs?.filter(obj => obj.rate >= from && obj.rate <= to))
  }, [from, to]);

  const sidebarForm = (data) => {
    setFormData(data)
    // Do stuff with the form data here e.g. send a POST request
    if (data.get('part_time')) {
      console.log("Potato")
    }
  }

  const filters = (from, to) => {
    const max = jobs?.reduce(function(prev, current) {
      return (prev.rate > current.rate) ? prev : current
    })
    const min = jobs?.reduce(function(prev, current) {
      return (prev.rate < current.rate) ? prev : current
    })
    
    setFrom(Math.ceil(min.rate * (from/100)))
    setTo(Math.ceil(max.rate * (to/100)))
  }

  return (
    <main>
      <Navbar navItems={navigation} location='NY New York'/>
      <Filters data={filters} from={from} to={to}/>
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
