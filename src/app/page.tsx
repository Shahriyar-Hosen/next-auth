"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-2xl font-bold">Welcome to PulseStock</h1>
      <h3 className="text-lg font-semibold">
        {session
          ? `Logged in as ${session.user.name}`
          : "You're not logged in!"}
      </h3>
      <button onClick={() => signIn("google")}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  );
}
