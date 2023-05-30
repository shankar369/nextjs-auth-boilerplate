import Navbar from "@/components/navbar/navbar"
import Home from "@/components/Home/Home"

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Navbar/>
      <Home/>
    </main>
  )
}
