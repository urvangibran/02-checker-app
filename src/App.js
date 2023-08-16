import { useState } from 'react';
import AddForm from './components/AddForm';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

const initialItems = [
  { id: 1, description: "Books", quantity: 2, packed: false },
  { id: 2, description: "Hats", quantity: 12, packed: false },
  { id: 3, description: "Headphone", quantity: 1, packed: false },
];

function App() {

  const [items, setItems] = useState(initialItems)

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem])
  }

  function removeAllItem() {
    const yesDelete = window.confirm("Are you sure want to delete all the items?")
    if (yesDelete)
      setItems([])
  }

  return (
    <div className='app'>
      <Header />
      <AddForm onAddItem={handleAddItem} />
      <List removeAllItem={removeAllItem} setItems={setItems} items={items} />
      <Footer items={items} />
    </div>
  );
}

export default App;
