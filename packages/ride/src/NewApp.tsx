// @ts-nocheck
import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import Auth from './Auth'
import Account from './Account'

export const App = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className='container' style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  )
}
