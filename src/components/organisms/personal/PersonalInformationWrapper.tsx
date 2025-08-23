import FormCreatePersonalInformation from "@/components/molecules/form/personal-information/FormCreatePersonalInformation";
import Image from "next/image";

export default function PersonalInformationWrapper() {
  return (
    <section className="flex w-full items-center justify-center py-10">
      <div className="w-full max-w-3xl space-y-8 px-6 md:px-0">
        <div className="space-y-2">
          <h1 className="font-paytone text-3xl">Data Diri Anda</h1>
          <p className="text-muted-foreground">
            Kami membutuhkan informasi pribadi Anda untuk membantu menghitung
            kebutuhan kalori harian secara lebih akurat.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/images/personal/people-form.svg"}
            width={400}
            height={250}
            alt="People Form"
            className="max-w-[250px] md:max-w-[450px]"
          />
        </div>
        <FormCreatePersonalInformation />
      </div>
    </section>
  );
}
