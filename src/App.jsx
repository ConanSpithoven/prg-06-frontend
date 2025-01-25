import GetBossList from './GetBossList.jsx';
import GetBossDetail from './GetBossDetail.jsx';
import AddBoss from './AddBoss.jsx';
import { useState } from 'react';

export default function App() {

  const [bosslist, setBosslist] = useState(null);

  function initBosslist(newList){
    setBosslist(newList);
   };

  function changeBosslist(newBoss){
    console.log(newBoss);
    setBosslist((bosslist) => [...bosslist, newBoss]);
  };


  //So, if you change the 'setBossList' below to 'changeBossList' so it actually gets called, it breaks.
  //What it's supposed to do is update the list on frontside to display the newly posted item.
  return (
    <>
    <main>
      <h1 className="text-center text-2xl font-bold">Dark souls 1 and 2 bosses</h1>
      <section>
        <GetBossList bosslist={bosslist} setBosslist={initBosslist}/>
      </section>
      <section>
        <AddBoss setBosslist={changeBosslist}/>
      </section>
    </main>
    </>
  )
}