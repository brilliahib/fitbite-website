import { Card, CardContent } from "@/components/ui/card";
import FormAuthUpdateAccount from "../form/auth/FormAuthUpdateAccount";
import { Session } from "next-auth";

interface CardAuthUpdateAccountProps {
  session: Session;
}

export default function CardAuthUpdateAccount({
  session,
}: CardAuthUpdateAccountProps) {
  return (
    <Card>
      <CardContent>
        <FormAuthUpdateAccount session={session} />
      </CardContent>
    </Card>
  );
}
