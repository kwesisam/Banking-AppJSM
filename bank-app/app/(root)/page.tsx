import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = {
    firstName: "Samuel",
    lastName: "Mensah",
    email: "samuelkojo399@gmail.com"
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
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance : 123.33},{currentBalance: 400.33}]}
      />
    </section>
  )
}

export default Home