import Image from "next/image";
// import { Badge } from "@/components/ui/badge"

interface ProjectStats {
  contributions: number;
  endDate: string;
  raised: number;
  goal: number;
  percentage: number;
}

interface ProjectCardProps {
  image: string;
  title: string;
  creator: string;
  stats: ProjectStats;
}

export function ProjectCard({
  image,
  title,
  creator,
  stats,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-zinc-800 rounded-b-lg">
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">Successful</Badge> */}
      </div>

      <div className="space-y-2 p-5">
        <h3 className="text-sm font-bold mb-2 text-white h-16">{title}</h3>
        <p className="text-zinc-400 mb-4 text-sm">by {creator}</p>

        <div className="mt-auto space-y-4">
          <div className="flex justify-between text-sm text-zinc-400">
            <div>
              <span className="text-white font-semibold">{stats.contributions.toLocaleString()}</span>
             <div>
              <span className="text-[12px]">contributions</span>
             </div>
            </div>
            <div>
              <span className="text-white font-semibold">{stats.endDate}</span>
             <div>
             <span className="text-zinc-400 text-[12px]">date de fin</span>
             </div>
            </div>
            <div>
              <span className="text-white font-semibold">{stats.raised.toLocaleString()} $</span>
              <div>
                <span className="text-right text-[12px] text-zinc-400">sur {stats.goal.toLocaleString()}$</span>
              </div>
            </div>
          </div>

          <div className="relative h-1 bg-red-400 rounded-full overflow-hidden">
            <div className="relative left-0 top-0 h-full bg-emerald-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
