import axios from 'axios';

export const getJobs = (controller:AbortSignal):any => 
    
    axios({
        method: 'get',
        url: 'jobs.json',
        responseType: 'json',
        signal: controller
    })
    .then(response => {
        return response.data
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
            return error.response
        }
        else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return error.response
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return error.response
        }
    })


export const getNavigation = (controller:AbortSignal):any => 
    
    axios({
        method: 'get',
        url: 'navigation.json',
        responseType: 'json',
        signal: controller
    })
    .then(function (response) {
       console.log(response.data)
        return response.data
        
    })
    .catch(function (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
            return error.response
        }
        else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return error.response
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return error.response
        }
    })
