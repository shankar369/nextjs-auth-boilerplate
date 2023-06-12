"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  // const [providers, setProviders] = useState(null);

  useEffect(() => {
    console.log(session,"-------homepage session")
  }, []);

  return (
    <div className=" h-screen">
      {session ? (
        <div className="h-20 bg-grey p-5 flex gap-5">
          {session?.user?.image && (
            <Image
            
              src={session?.user?.image}
              height={50}
              width={50}
              alt="profile img"
            />
          )}
          Hello {session?.user?.name} <br />
          Signed in with email {session?.user?.email}
        </div>
      ) : (
        <>
          <h2>Not signed in</h2>
          {/* {providers &&
              Object.values(providers).map((provider) => (
                <>
                {console.log(provider)}
                <button
                  className="bg-white text-black p-3 m-2"
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Sign in with {provider.name}
                </button>
                </>
              ))} */}
        </>
      )}
    </div>
  );
}
