import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <div>olá {session?.user?.name}</div>
      <div>Dashboard</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
