import Navbar from "@/shared/components/navbar";
import SolarSystemScene from "@/shared/components/provided/SolarSystemScene";
import { useState } from "react";

export default function HomePage() {
    const [filter, setFilter] = useState<TypeFilterValue>("all");
    const [selectedId, setSelectedId] = useState<string | null>(null);


  return (
    <div>
      <Navbar />
      <header>
        <h1 className="text-3xl font-bold">Explora el sistema solar</h1>
        <p className="opacity-70">
          Filtra por tipo y selecciona un planeta para ver su información.
        </p>
      </header>
      <div>
        <button className="btn">Todos</button>
        <button className="btn">Rocoso</button>
        <button className="btn">Gigantes gaseosos</button>
        <button className="btn">Gigantes helados</button>
      </div>
      <div className="h-96 overflow-hidden rounded-box bg-black">
        <SolarSystemScene
          selectedId={selectedId}
        />
      </div>
    </div>
  );
}
