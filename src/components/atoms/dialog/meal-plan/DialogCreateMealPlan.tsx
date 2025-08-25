import FormCreateMealPlan from "@/components/molecules/form/meal-plan/FormCreateMealPlan";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogCreateMealPlanProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogCreateMealPlan({
  open,
  setOpen,
}: DialogCreateMealPlanProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buat Rencana Makan</DialogTitle>
        </DialogHeader>
        <FormCreateMealPlan setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
