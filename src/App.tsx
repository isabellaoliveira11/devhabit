import { HabitCard } from "./components/HabitCard";
import { FaLaptopCode, FaTint } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl text-neonPurple mb-4">DevHabit</h1>

      <HabitCard
        name="Estudar React"
        tag="dev"
        streak={4}
        progress={60}
        icon={<FaLaptopCode />}
      />

      <HabitCard
        name="Beber água"
        tag="saúde"
        streak={10}
        progress={90}
        icon={<FaTint />}
      />
    </div>
  );
}

export default App;
