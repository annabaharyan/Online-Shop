import { React, useState } from 'react';
import './App.css';
import UL from './components/ulComp';
import Thead from './components/thead';
import Tbody from './components/tbody';
function App() {
  const products = [
    {
      id: 1,
      name: "tavari mis",
      status: "completed",
    },
    {
      id: 2,
      name: "gari mis",
      status: "reject",
    },
    {
      id: 3,
      name: "horti mis",
      status: "cancel",
    },
    {
      id: 4,
      name: "havi mis",
      status: "completed",
    },
    {
      id: 5,
      name: "tavari xorovac",
      status: "progress",
    },
    {
      id: 6,
      name: "gari xorovac",
      status: "completed",
    },
    {
      id: 7,
      name: "horti xorovac",
      status: "reject",
    },
    {
      id: 8,
      name: "havi qyabab",
      status: "cancel",
    }, {
      id: 9,
      name: "havi mis",
      status: "completed",
    },
    {
      id: 10,
      name: "tavari qyabab",
      status: "reject",
    },
    {
      id: 11,
      name: "gari qyabab",
      status: "progress",
    },
    {
      id: 12,
      name: "horti qyabab",
      status: "progress",
    },
    {
      id: 13,
      name: "havi qyabab",
      status: "cancel",
    },

  ]
  let [items, setItems] = useState(products)
  let [defaultStatus, setdefaultStatus] = useState("progress");


  return (
    <>
      <UL defStat={defaultStatus} setDefStat={function (res) {
        setdefaultStatus(res)
      }} />
      <table>
        <thead>
          <Thead />
        </thead>
        <tbody>
          <Tbody productArr={items} status={defaultStatus} setStatus={function (res) {
            setdefaultStatus(res)
          }} />
        </tbody>

      </table>
    </>
  )
}

export default App;
