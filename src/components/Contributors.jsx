import React, { useEffect, useState } from 'react'
import Contributers from '../assets/objects/contributers.json'

const Contributors = () => {
  const [contributers, setContributers] = useState([]);

  useEffect(() => {
    const fetchGitHubUserData = async () => {
      try {
        const usernames = Contributers;

        // Fetch user data for each GitHub username
        const userDataPromises = usernames.map(username =>
          fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
        );

        // Wait for all promises to resolve
        const userData = await Promise.all(userDataPromises);
        setContributers(userData);

      } catch(err){
        console.error('Error fetching GitHub user data:', err);
      }
    };

    fetchGitHubUserData();
  }, []);



  return (
    <div>
      <h2 className='text-center font-semibold text-2xl'>Special thanks to all contributers:</h2>
      <div className='flex justify-center mt-12'>
        {contributers.map(user => (
          <div key={user.id} className='p-4'>
            <a href={user.html_url} className='cursor-pointer' >
              <img src={user.avatar_url} className='w-20 mx-auto h-20 rounded-full object-cover' alt={`Profile Picture of ${user.login}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contributors