'use client';

import { SessionProvider } from "next-auth/react";

interface IProvider {
  children : React.ReactNode
}

const Provider = ({ children } : IProvider) => (
  <SessionProvider>
    {children}
  </SessionProvider>
)

export default Provider;