
import { auth } from "@/auth"
import Link from "next/link";
import { Button } from "../ui/button";

async function ProfileButton() {
    const session = await auth();

    const user = session?.user

    return (
        <div>
            {
                !user ?
                    <Button variant="ghost">
                        <Link href={"/login"}>
                            Se connecter
                        </Link>
                    </Button>
                    :
                    <Button variant="ghost">
                        <Link href={"/dashboard"}>
                            Dashboard
                        </Link>
                    </Button>
            }

        </div>
    )
}

export default ProfileButton