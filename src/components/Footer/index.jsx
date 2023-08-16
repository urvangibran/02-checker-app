import React from 'react'

function Footer({ items }) {
  if(items.length === 0) {
    return(
      <p className='stats'>
        <em>Start adding some items to your list 🎒</em>
      </p>
    )
  }

  const totalItems = items.length;
  const totalPacked = items.filter(item => item.packed).length
  const percentage = Math.round(totalPacked / totalItems * 100)

  return (
    <footer className='stats'>
      <em>
        {
          percentage === 100 ? "You have already bought everything 🎉" 
          : `You have ${totalItems} items on your list, and you already bought ${totalPacked} ( ${percentage} %)`
        }
      </em>
    </footer>
  )
}

export default Footer