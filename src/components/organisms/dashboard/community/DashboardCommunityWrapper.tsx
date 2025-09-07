"use client";

import CardListMessageCommunity from "@/components/molecules/card/CardListChatCommunity";
import MessageInputCommunity from "@/components/molecules/message/MessageInputCommunity";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllMessageCommunity } from "@/http/community/get-all-message-community";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function DashboardCommunityWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllMessageCommunity(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="space-y-6 md:flex-[2]">
        <div className="relative h-50 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/background/bg-community.jpg"
            alt="Forum Community"
            fill
            className="object-cover"
          />
          <div className="from-primary/90 via-primary/40 absolute inset-0 bg-gradient-to-r to-transparent" />

          <div className="absolute inset-0 flex max-w-lg flex-col justify-center space-y-4 px-8 text-white">
            <h2 className="text-2xl font-bold">
              Temukan dan diskusikan topik menarik disini!
            </h2>
            <p className="text-sm leading-relaxed">
              Bergabunglah dengan komunitas kami untuk mendapatkan dukungan dan
              berbagi pengalaman dengan anggota lain.
              <span className="hidden md:inline">
                Dapatkan tips, resep, dan dukungan dari komunitas kami.
              </span>
            </p>
          </div>
        </div>
        <MessageInputCommunity />
        <CardListMessageCommunity data={data?.data} isLoading={isPending} />
      </div>
      <div className="hidden md:inline md:flex-[1]">
        <div className="flex flex-col gap-6 md:sticky md:top-10">
          <Card>
            <CardContent className="space-y-6">
              <h1 className="font-semibold">Topik Teratas</h1>
              <div className="space-y-4">
                <p className="font-medium">1. Tips Diet Sehat</p>
                <p className="font-medium">2. Resep Makanan Rendah Kalori</p>
                <p className="font-medium">
                  3. Olahraga Efektif untuk Menurunkan Berat Badan
                </p>
                <p className="font-medium">4. Pengalaman Diet Sukses</p>
                <p className="font-medium">
                  5. Motivasi untuk Menurunkan Berat Badan
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-6">
              <h1 className="font-semibold">Topik Terbaru</h1>
              <div className="space-y-4">
                <p className="font-medium">1. Tips Diet Sehat</p>
                <p className="font-medium">2. Resep Makanan Rendah Kalori</p>
                <p className="font-medium">
                  3. Olahraga Efektif untuk Menurunkan Berat Badan
                </p>
                <p className="font-medium">4. Pengalaman Diet Sukses</p>
                <p className="font-medium">
                  5. Motivasi untuk Menurunkan Berat Badan
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
