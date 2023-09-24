import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "./components/UserCard";

const Home = async () => {
  const session = await getServerSession(options);

  return session ? (
    <UserCard user={session?.user} pagetype={"Home"} />
  ) : (
    <h1 className="text-5xl">You Shall Not Pass!</h1>
  );
};

export default Home;
