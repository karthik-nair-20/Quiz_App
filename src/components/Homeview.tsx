export function Homeview() {
  return (
    <div className="hidden md:flex items-center justify-center bg-[#31304D] p-8">
    <div className="text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Quiz Master</h1>
      <p className="text-xl md:text-2xl mb-8">Challenge yourself with our interactive quizzes!</p>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Multiple categories to choose from</li>
        <li>Adjustable difficulty levels</li>
        <li>Customizable number of questions</li>
        <li>Different question types available</li>
      </ul>
    </div>
  </div>
  )
}