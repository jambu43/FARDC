import Image from "next/image";
import { Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CampagneTabs } from "@/components/campagnes/tab";
import { getCampaign } from "@/actions/strapi/api/campaigns/find-one";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

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
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="p-6 md:p-8 space-y-4 mb-8">
          <h1 className="text-2xl md:text-xl font-bold text-center mb-5">
            {campaign.title}
          </h1>
          <p className="text-center text-zinc-600 font-md">
            {campaign.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          {/* Left Column - Photos */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border-4 border-primary">
              <div className="relative aspect-[16/9] md:aspect-[4/3] h-full">
                <Image
                  src={campaign?.featuredImage || "/guerre.jpg"}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm text-green-700">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Don
            </div>
          </div>

          {/* Right Column - Donation Info */}
          <div className="space-y-4">
            <div className="rounded-lg border bg-white p-6 shadow-xl">
              <div className="mb-4">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full" />
                    <div>
                      <h2 className="font-semibold">{campaign.organization}</h2>
                      <div className="flex gap-2 text-sm text-zinc-600">
                        {campaign?.categories.map((category: string) => (
                          <div
                            key={category}
                            className="flex items-center flex-wrap"
                          >
                            <span className="text-zinc-600 mr-2">•</span>
                            <span key={category}>{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Stats */}
                <div className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2 mb-5">
                        <span className="text-2xl font-bold">
                          {campaign.amountCollected}$
                        </span>
                        <span className="text-sm text-zinc-600">
                          collectés sur{" "}
                          <span className="font-bold text-primary text-2xl">
                            {campaign.goal}$
                          </span>
                        </span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                      <span className="text-sm font-medium text-emerald-600">
                        {campaign.progress}%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-2xl font-bold">
                          {campaign.contributions}
                        </span>
                        <span className="text-sm text-zinc-600 block">
                          contribution(s)
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-2xl font-bold">
                          {campaign.daysLeft}
                        </span>
                        <span className="text-sm text-zinc-600 block">
                          jours restants
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-zinc-600">
                    <Button variant="link" className="h-auto p-0">
                      Paiement sécurisé et sans engagement
                    </Button>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Link href={`/campagnes/donations/${campaign.id}`}>
                  <Button className="w-full bg-primary hover:bg-secondary text-white">
                    Je soutiens / À partir de 1 $
                  </Button>
                </Link>

                <div></div>
              </div>

              <div className="mt-6">
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-purple-50 p-3">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-purple-900">
                    765 personnes viennent de faire un don.
                  </span>
                </div>


                {/* Social Actions */}
                <div className="flex  gap-4 mt-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    PARTAGER
                  </Button>
                  {/* <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    SUIVRE
                  </Button> */}
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    Commenter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <CampagneTabs />
      </section>
    </div>
  );
}

export default CampagneDetails;
