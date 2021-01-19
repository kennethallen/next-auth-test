import { signIn, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  return loading ? <>
    Loading
  </> : session ? <>
    Signed in as {session.user.email}
    <button onClick={signOut}>Sign out</button>
  </> : <>
    Not signed in
    <button onClick={signIn}>Sign in</button>
  </>
}
