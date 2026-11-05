"use client";

import PlanetCard from "@/features/planets/components/PlanetCard";
import TypeFilter, { TypeFilterValue } from "@/features/planets/components/TypeFilter";
import { planets } from "@/features/planets/data/planets";
import { typeLabels } from "@/features/planets/typeLabels";
import SolarSystemScene from "@/shared/components/provided/SolarSystemScene";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [filter, setFilter] = useState<TypeFilterValue>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visiblePlanets =
    filter === "all" ? planets : planets.filter((p) => p.type === filter);
  const selectedPlanet = visiblePlanets.find((p) => p.id === selectedId) ?? null;

  function handleFilterChange(value: TypeFilterValue) {
    setFilter(value);
    setSelectedId(null);
  }

  function handleSelect(id: string) {
    setSelectedId(id);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row h-25 gap-60 bg-gray-100 p-3">
        <header className="mb-1 mt-1">
          <h1 className="text-3xl font-bold">Explora el sistema solar</h1>
          <p className="opacity-70">
            Filtra por tipo y selecciona un planeta para ver su información.
          </p>
        </header>

        <TypeFilter value={filter} onChange={handleFilterChange} />
      </div>

      <div className="h-96 overflow-hidden rounded-box bg-black">
        <SolarSystemScene
          planets={visiblePlanets}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      </div>

      {selectedPlanet ? (
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">
              {selectedPlanet.name}
              <span>
                {typeLabels[selectedPlanet.type]}
              </span>
            </h2>
            <p>{selectedPlanet.description}</p>
            <div className="">
              <Link href={`/planets/${selectedPlanet.id}`} className="btn">
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div role="alert" className="alert alert-info">
          <span>Selecciona un planeta para ver su info</span>
        </div>
      )}

      <section className="grid gap-3 sm:grid-cols-2">
        {visiblePlanets.map((planet) => (
          <PlanetCard
            key={planet.id}
            planet={planet}
            selected={planet.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </section>
    </div>
  );
}
