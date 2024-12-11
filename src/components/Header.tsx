export default function Header() {
  return (
    <div className="relative overflow-hidden w-full h-screen transition-all duration-500">
      <header
        className="relative bg-cover bg-no-repeat bg-fixed h-full"
        style={{ backgroundImage: "url('hero_1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center">
            <h4 className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight animate-fadeInUp">
              Welcome to Quiz Master
            </h4>
          </div>
        </div>
      </header>
    </div>
  )
}