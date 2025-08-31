import FormCreateWeeklyProgress from "@/components/molecules/form/weekly-progress/FormCreateWeeklyProgress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGetPersonalInformation } from "@/http/personal-information/get-personal-information";
import { Info } from "lucide-react";
import { useSession } from "next-auth/react";

interface DialogCreateWeeklyProgressProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogCreateWeeklyProgress({
  open,
  setOpen,
}: DialogCreateWeeklyProgressProps) {
  const { data: session, status } = useSession();

  const { data } = useGetPersonalInformation(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Progress Mingguan</DialogTitle>
        </DialogHeader>
        <Alert variant="default">
          <Info />
          <AlertTitle>Informasi</AlertTitle>
          <AlertDescription>
            <p>
              Berat badan terakhir adalah{" "}
              <span className="font-semibold text-black">
                {data?.data.weight} kg
              </span>
            </p>
          </AlertDescription>
        </Alert>
        <FormCreateWeeklyProgress setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
