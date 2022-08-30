import { React, useState } from 'react';
import './App.css';

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
  let [newStatus, setNewStatus] = useState(defaultStatus)

  const changeStatusProg = (id) => {

    let newObj = items.map(item => {
      if (item.id == id) {
        setNewStatus("progress")
        item.status = newStatus
      }
      return item
    })
    setItems(newObj)

  }
  const changeStatusCanc = (id) => {

    let newObj = items.map(item => {
      if (item.id == id) {
        setNewStatus("cancel")
        item.status = newStatus
      }
      return item
    })
    setItems(newObj)

  }
  const changeStatusComp = (id) => {

    let newObj = items.map(item => {
      if (item.id == id) {
        setNewStatus("completed")
        item.status = newStatus
      }
      return item
    })
    setItems(newObj)
  }
  const changeStatusRej = (id) => {

    let newObj = items.map(item => {
      if (item.id == id) {
        setNewStatus("reject")
        item.status = newStatus
      }
      return item
    })
    setItems(newObj)

  }
  return (
    <>
      <ul>
        <li className={defaultStatus == "progress" ? "myActive" : ""} onClick={() => setdefaultStatus("progress")}>Progress</li>
        <li className={defaultStatus == "completed" ? "myActive" : ""} onClick={() => setdefaultStatus("completed")}>Completed</li>
        <li className={defaultStatus == "cancel" ? "myActive" : ""} onClick={() => setdefaultStatus("cancel")}>Cancel</li>
        <li className={defaultStatus == "reject" ? "myActive" : ""} onClick={() => setdefaultStatus("reject")}>Reject</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>CONFIG</th>
          </tr>
        </thead>
        <tbody>
          {
            items.filter(item => item.status == defaultStatus).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => { changeStatusProg(item.id) }} className={defaultStatus == "progress" ? "myActiveButton" : ""}>Progress</button>
                  <button onClick={() => { changeStatusComp(item.id) }} className={defaultStatus == "completed" ? "myActiveButton" : ""}>Completed</button>
                  <button onClick={() => { changeStatusCanc(item.id) }} className={defaultStatus == "cancel" ? "myActiveButton" : ""}> Cancel</button>
                  <button onClick={() => { changeStatusRej(item.id) }} className={defaultStatus == "reject" ? "myActiveButton" : ""}>Reject</button>
                </td>

              </tr>
            ))
          }
        </tbody>

      </table>
    </>
  )
}

export default App;
