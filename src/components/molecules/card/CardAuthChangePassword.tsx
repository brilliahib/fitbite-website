import { Card, CardContent } from "@/components/ui/card";
import FormChangePassword from "../form/auth/FormAuthChangePassword";

export default function CardAuthChangePassword() {
  return (
    <Card>
      <CardContent>
        <FormChangePassword />
      </CardContent>
    </Card>
  );
}
