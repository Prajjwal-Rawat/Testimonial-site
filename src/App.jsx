import Testimonial from "./components/Testimonial"
import { Reviews } from "./Data"


function App() {


  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gradient-to-r from-indigo-900 to-indigo-200">

      <div className="text-center">

      <h1 className="text-4xl font-bold tracking-wide">Our Testimonial</h1>

      <div className="bg-slate-300 h-[4px] w-1/5 mt-1 m-auto"></div>

      <Testimonial Reviews = {Reviews}/>
      
      </div>

    </div>
  )
}

export default App
