interface input {
  text: string,
  onClick: () => void,
  disable: boolean
}
export function Button({text, onClick, disable}: input) {
  return (
    <button
      className="flex flex-col items-center px-6 py-3 rounded-md text-gray-700 bg-white border 
         shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:shadow-none"
         onClick={onClick}
         disabled={disable}
    >  
      {text}
    </button>
  )
}

