import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = {
    firstName: "Samuel"
  }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting" 
            title="Welcome" 
            user={loggedIn?.firstName || 'quests'}
            subtext = "Access and manage your account and transactions effeciently."
          />
          <TotalBalanceBox 
          accounts={[]} 
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home