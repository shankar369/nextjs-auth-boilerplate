'use client'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
  return (
    <div className="w-full h-12 p-6 bg-white flex justify-between items-center">
        <h1 className=" text-2xl text-black" >Next Auth</h1>
        <div>
        {session ? <button onClick={() => signOut()} className=" bg-black px-4 py-2 rounded-md" >Sign out</button> : <button onClick={() => signIn()} className=" bg-black px-4 py-2 rounded-md" >Sign in</button>}
        </div>
    </div>
  )
}

export default Navbar
