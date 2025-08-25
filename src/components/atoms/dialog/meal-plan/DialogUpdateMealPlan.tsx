import FormUpdateMealPlan from "@/components/molecules/form/meal-plan/FormUpdateMealPlan";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MealPlan } from "@/types/plan/meal-plan";

interface DialogUpdateMealPlanProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  data?: MealPlan;
  id: number;
}

export default function DialogUpdateMealPlan({
  open,
  setOpen,
  id,
  data,
}: DialogUpdateMealPlanProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Plan Makanan</DialogTitle>
        </DialogHeader>
        <FormUpdateMealPlan data={data} id={id} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
