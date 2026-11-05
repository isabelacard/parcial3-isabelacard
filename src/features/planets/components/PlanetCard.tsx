import type { Planet } from "@/types/planet";
import { typeLabels } from "../typeLabels";

interface PlanetCardProps {
    planet: Planet;
    selected: boolean;
    onSelect: (id: string) => void;
}

export default function PlanetCard({ planet, selected, onSelect }: PlanetCardProps) {
    return (
        <button
            type="button"
        >
            <div className="card-body flex-row items-center gap-3 p-4">
                <span
                    className="inline-block h-8 w-8 shrink-0 rounded-full"
                    style={{ backgroundColor: planet.color }}
                />
                <div className="flex-1">
                    <h3 className="card-title text-base">{planet.name}</h3>
                    <p className="text-sm opacity-70">{planet.distanceFromSun} M km del Sol</p>
                </div>
                <span className="badge">{typeLabels[planet.type]}</span>
            </div>
        </button>
    );
}
