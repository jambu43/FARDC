
import Image from "next/image";
import { Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CampagneTabs } from "@/components/campagnes/tab";
import { getCampaign } from "@/actions/strapi/api/campaigns/find-one";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function CampagneDetails({ params }: Props) {
  const { id } = await params;

  const campaign = await getCampaign(id);

  if (!campaign) {
    return notFound();
  }
  return (
    <div>
      <div className="bg-secondary pb-8 h-[30rem] "></div>
      <section className="container -mt-[25rem] py-8 px-4">

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">

          <div className="p-6 md:p-8 space-y-4">
            <h1 className="text-2xl md:text-xl font-bold text-center">
              {campaign.title}
            </h1>
            <p className="text-center text-zinc-600 font-md">
              {campaign.description}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row">
            {/* Main Image Column - 60% */}
            <div className="md:w-[60%]  p-6 md:p-8">
              <div className="relative aspect-[16/9] md:aspect-[4/3] h-full">
                <Image
                  src={campaign?.featuredImage || "/guerre.jpg"}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Stats and Action Column - 40% */}
            <div className="md:w-[40%] p-6 md:p-8">
              {/* Project Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full" />
                  <div>
                    <h2 className="font-semibold">{campaign.organization}</h2>
                    <div className="flex gap-2 text-sm text-zinc-600">
                      {
                        campaign?.categories.map((category: string) => (
                          <div key={category} className="flex items-center flex-wrap">
                            <span className="text-zinc-600 mr-2">•</span>
                            <span key={category}>{category}</span>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6 mt-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{campaign.amountCollected}$</span>
                      <span className="text-sm text-zinc-600">
                        collectés sur <span className="font-bold text-primary text-2xl">{campaign.goal}$</span>
                      </span>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                    <span className="text-sm font-medium text-emerald-600">
                      {campaign.progress}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-2xl font-bold">{campaign.contributions}</span>
                      <span className="text-sm text-zinc-600 block">
                        contribution(s)
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-2xl font-bold">{campaign.daysLeft}</span>
                      <span className="text-sm text-zinc-600 block">
                        jours restants
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href={`/campagnes/donations/${campaign.id}`}>
                    <Button className="w-full bg-primary hover:bg-[#1994E6] text-white py-8">
                      <span className="flex flex-col">
                        <span className="text-lg font-bold">CONTRIBUER</span>
                        <span className="text-sm font-normal">À partir de 1 $</span>
                      </span>
                    </Button>
                  </Link>
                </div>



                <p className="text-center text-sm text-zinc-600">
                  <Button variant="link" className="h-auto p-0">
                    Paiement sécurisé et sans engagement
                  </Button>
                </p>

                {/* Social Actions */}
                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    PARTAGER
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    SUIVRE
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    Commenter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CampagneTabs />
      </section>
    </div>
  );
}

export default CampagneDetails;
