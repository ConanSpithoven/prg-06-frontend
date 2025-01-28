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
        element: <div class="bg-gray-900 border border-gray-800 rounded shadow p-2 flex-1 text-right md:text-center font-bold uppercase text-gray-400 text-2xl">
          404 not found.
        </div>
      }
    ]
  }])

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