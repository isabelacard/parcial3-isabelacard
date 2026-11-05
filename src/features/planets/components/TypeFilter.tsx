import type { PlanetType } from "@/types/planet";

export type TypeFilterValue = PlanetType | "all";

interface TypeFilterProps {
    value: TypeFilterValue;
    onChange: (value: TypeFilterValue) => void;
}

const options: { value: TypeFilterValue; label: string }[] = [
    { value: "all", label: "Todos" },
    { value: "rocky", label: "Rocosos" },
    { value: "gas", label: "Gigantes gaseosos" },
    { value: "ice", label: "Gigantes helados" },
];

export default function TypeFilter({ value, onChange }: TypeFilterProps) {
    return (
        <div role="tablist" className="tabs tabs-box w-fit">
            {options.map((option) => (
                <button
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
