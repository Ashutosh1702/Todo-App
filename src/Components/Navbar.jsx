import React from 'react'

export const Navbar = () => {
  return (
<nav className='flex justify-between bg-slate-700 text-white py-2 rounded-xl'>
    <div className='Logo'>
        <span className='font-bold text-xl mx-8'>iTask</span>
    </div>
    <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all duration'>Home</li>
        <li className='cursou-pointer hover:font-bold transition-all duration'>Your Tasks</li>
    </ul>
</nav>
)
}
