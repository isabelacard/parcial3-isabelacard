"use client";

import TypeFilter, { TypeFilterValue } from "@/features/planets/components/TypeFilter";
import { planets } from "@/features/planets/data/planets";
import Navbar from "@/shared/components/navbar";
import SolarSystemScene from "@/shared/components/provided/SolarSystemScene";
import { useState } from "react";

export default function HomePage() {
  const [filter, setFilter] = useState<TypeFilterValue>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visiblePlanets =
    filter === "all" ? planets : planets.filter((p) => p.type === filter);
  const selectedPlanet = visiblePlanets.find((p) => p.id === selectedId) ?? null;

    function handleSelect(id: string) {
    setSelectedId(id);
  }

  return (
    <div className="flex flex-col gap-6 m-4">
      <Navbar />
      <header className="mb-2 mt-1">
        <h1 className="text-3xl font-bold">Explora el sistema solar</h1>
        <p className="opacity-70">
          Filtra por tipo y selecciona un planeta para ver su información.
        </p>
      </header>

    <TypeFilter/>


      <div className="h-96 overflow-hidden rounded-box bg-black">
        <SolarSystemScene
          planets={visiblePlanets}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
