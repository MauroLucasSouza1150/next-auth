import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-4">
        <LoginForm />
      </div>
    </main>
  );
}
