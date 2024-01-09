import React, { useEffect } from 'react'
import Login from './screens/auth/login'
import Sidebar from './components/Sidebar'
import { AppNavigation } from './navigation/appNavigation'
import useUser from './hooks/useUser'
import { AuthNavigation } from './navigation/authNavigation'
import { Helmet } from 'react-helmet'

function App() {

  const { user } = useUser()


  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '6621944977898930',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2'
      });
    };

  }, [])



  return (
    <>
      <Helmet>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/all.js"
        ></script>
      </Helmet>


      {user ?
        <Sidebar>
          <AppNavigation />
        </Sidebar>
        :
        <AuthNavigation />}


    </>


  )
}

export default App