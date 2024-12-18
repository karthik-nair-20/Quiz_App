interface question {
  text: string,
  currentPage: number,
}

export function Question({text, currentPage}: question) {
  return (
    <div className="p-6 sm:p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black">
      <h2 className="text-2xl sm:text-xl font-bold mb-4">Question { currentPage + 1 }</h2>
      <p className="text-lg sm:text-base font-medium text-start mb-4 capitalize">{decodeURIComponent(text)}</p>
    </div>
  )
  
}