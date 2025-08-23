import FormUpdateCalories from "@/components/molecules/form/calories/FormUpdateCalories";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calories } from "@/types/calories/calories";

interface DialogUpdateCaloriesProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  data?: Calories;
  id: number;
}

export default function DialogUpdateCalories({
  open,
  setOpen,
  id,
  data,
}: DialogUpdateCaloriesProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Aktivitas Kalori</DialogTitle>
        </DialogHeader>
        <FormUpdateCalories data={data} id={id} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
