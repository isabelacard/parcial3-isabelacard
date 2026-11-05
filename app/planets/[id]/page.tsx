import Link from "next/link";
import { notFound } from "next/navigation";
import { planets } from "@/features/planets/data/planets";
import PlanetViewer from "@/shared/components/provided/PlanetViewer";

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  return (

      <div className="h-80 overflow-hidden rounded-box bg-black">
        <PlanetViewer planet={planets[+id]} />
      </div>

  );
}
