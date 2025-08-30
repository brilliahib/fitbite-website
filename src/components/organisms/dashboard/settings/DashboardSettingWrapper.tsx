import CardAuthChangePassword from "@/components/molecules/card/CardAuthChangePassword";
import CardAuthUpdateAccount from "@/components/molecules/card/CardAuthUpdateAccount";
import CardUpdatePersonalInformation from "@/components/molecules/card/CardUpdatePersonalInformation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function DashboardSettingWrapper() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Tabs defaultValue="account">
        <TabsList className="mb-3">
          <TabsTrigger value="account">Pengaturan Akun</TabsTrigger>
          <TabsTrigger value="personal-information">
            Informasi Pribadi
          </TabsTrigger>
          <TabsTrigger value="password">Ganti Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CardAuthUpdateAccount session={session!} />
        </TabsContent>
        <TabsContent value="personal-information">
          <CardUpdatePersonalInformation />
        </TabsContent>
        <TabsContent value="password">
          <CardAuthChangePassword />
        </TabsContent>
      </Tabs>
    </div>
  );
}
