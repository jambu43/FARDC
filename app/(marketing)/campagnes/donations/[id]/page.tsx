import { getCampaign } from "@/actions/strapi/api/campaigns/find-one";
import DonationsDetails from "@/components/donations/content";
import { notFound } from "next/navigation";


type DonationItem = {
  name: string;
  amount: number;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function DonationsDetailsPage({ params }: Props) {
  const { id } = await params;

  const campaign = await getCampaign(id);

  if (!campaign) {
    return notFound();
  }


  return (
    <div className="container">
      <DonationsDetails campagne={campaign} />
    </div>
  );
}

export default DonationsDetailsPage;

