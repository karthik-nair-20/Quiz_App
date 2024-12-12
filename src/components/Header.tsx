import { AboutQuiz } from "./Accordion";

export default function Header() {
  return (
    <div className="relative overflow-hidden w-full h-screen transition-all duration-500">
      <header
        className="relative bg-cover bg-no-repeat bg-fixed h-full"
        style={{ backgroundImage: "url('quiz-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
        <div className="container mx-auto h-full flex items-center justify-cente flex-col">
          <div className="text-center mt-10">
            <h4 className="text-slate-100 text-4xl lg:text-6xl font-extrabold leading-tight animate-fadeInUp">
              Welcome to Quiz Master
            </h4>
            <AboutQuiz />
          </div>
        </div>
      </header>
    </div>
  )
}