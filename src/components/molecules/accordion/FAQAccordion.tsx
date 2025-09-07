import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Apa itu Fitbite?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Fitbite adalah aplikasi web untuk membantu kamu menjalani pola makan
            sehat, tracking kalori, dan mencapai target dietmu secara efektif.
          </p>
          <p>
            Dengan Fitbite, kamu bisa mencatat makanan harian, memantau asupan
            nutrisi, dan mendapatkan insight untuk membuat pilihan yang lebih
            sehat setiap hari.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Bagaimana cara tracking kalori?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Kamu cukup memasukkan makanan atau minuman yang dikonsumsi setiap
            hari.
          </p>
          <p>
            Fitur ini membantu kamu melihat total asupan harian dan
            membandingkannya dengan target kalori yang ingin dicapai.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Apakah Fitbite cocok untuk semua jenis diet?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Ya! Fitbite fleksibel dan mendukung berbagai jenis diet seperti diet
            rendah kalori, keto, vegetarian, dan lainnya.
          </p>
          <p>
            Kamu bisa menyesuaikan target kalori dan preferensi makanan,
            sehingga aplikasi ini bisa membantu siapa saja yang ingin hidup
            lebih sehat.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          Apakah Fitbite menyediakan rekomendasi menu?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Fitbite menyediakan rekomendasi menu sehat berdasarkan target kalori
            dan preferensi makananmu.
          </p>
          <p>
            Menu yang diberikan bisa langsung diikuti atau dimodifikasi sesuai
            selera, sehingga memudahkan kamu tetap konsisten dalam diet.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Apakah data saya aman di Fitbite?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Kami menjaga privasi dan keamanan data pengguna dengan standar
            keamanan tinggi.
          </p>
          <p>
            Semua informasi makanan, berat badan, dan catatan kesehatanmu
            tersimpan dengan aman dan hanya dapat diakses oleh kamu.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
