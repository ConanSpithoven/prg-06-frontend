import GetBossList from './GetBossList.jsx';
import GetBossDetail from './GetBossDetail.jsx';
import AddBoss from './AddBoss.jsx';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './Layout.jsx';

export default function App() {
  const [bosslist, setBosslist] = useState([]);

  const initBosslist = (newList) => {
    setBosslist(newList);
  };

  const changeBosslist = (newBoss) => {
    setBosslist([...bosslist, newBoss]);
  };

  const browserRouter = createBrowserRouter([{
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <GetBossList bosslist={bosslist} setBosslist={initBosslist} />
      },
      {
        path: "/boss/create",
        element: <AddBoss changeBosslist={changeBosslist}/>
      },
      {
        path: "/boss/:id",
        element: <GetBossDetail />
      },
      {
        path: "*",
        element: <div>404 not found.</div>
      }
    ]
  }])
    
  //So, if you change the 'setBossList' below to 'changeBossList' so it actually gets called, it breaks.
  //What it's supposed to do is update the list on frontside to display the newly posted item.
  return (
    <>
    <main>
      <section>
        <RouterProvider router={browserRouter} />
      </section>
    </main>
    </>
  )
}