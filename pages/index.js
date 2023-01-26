import CardComponent from "../components/CardComponent";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <main className="w-full flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">Component Library Testing</h1>
        <CardComponent />
      </main>
    </div>
  )
}