import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";
import './index.css';

export function App() {
  return (
    <main className="flex gap-5 max-w-[1216px] mx-auto py-5 flex-col">
      <Header />
      <AttendeeList />
    </main>
  )
}