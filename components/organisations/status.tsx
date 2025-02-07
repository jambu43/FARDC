import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

type Props = {
    role: "Authenticated" | "Organisation"
}

function Status({ role }: Props) {
    const status = role === "Authenticated" ? "inactive" : "active";
    const icon = status === "active" ? <CheckCircleIcon className="h-5 w-5 text-green-500" /> : <XCircleIcon className="h-5 w-5 text-red-500" />;

    return (
        // @ts-ignore
        <Badge variant={status === "active" ? "success" : "destructive"} className="flex items-center">
            {icon}
            <span className="ml-2">{status}</span>
        </Badge>
    )
}

export default Status