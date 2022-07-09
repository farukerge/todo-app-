import React, { useState } from "react";


function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);




  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("enter your to do");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }


  
  const onSubmit = e => {
  e.preventDefault();
}

  
  return (
    <div className=" h-screen w-full">

      <div className="flex flex-col w-2/4 mx-auto relative justify-center py-12 ">

      {/* 1. Header  */}
      <h1 className=" text-gray-500 mb-12 text-4xl p-2">My Todo List</h1>
        
        <form onSubmit={onSubmit} className="flex p-2  items-center ">
          {/* 2. Add new item (input) */}
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Enter your to do..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />

          {/* Add (button) */}
          <button
            className="bg-sky-500 hover:bg-sky-600  rounded mt-1 px-5 text-slate-200 py-2 ml-3 "
            onClick={() => addItem()}
          >
            Add
          </button>
        </form>

        <div className="mt-12">
          {/* 3. List of todos (unordered list) */}
          <ul className="flex flex-col ">
            {items.map((item) => {
              return (
                <div className="flex p-2 items-center ">
                  <li className="flex border p-2 border-slate-500 rounded-md" key={item.id}>
                    {item.value}
                    <button
                      className="delete-button bg-sky-500 text-slate-200 px-2 ml-4 rounded"
                      onClick={() => deleteItem(item.id)}
                    >
                      Complete
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;