import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy data makanan
const foods = [
  { name: "Nasi Putih", portion: "1 piring (200g)", calories: 260 },
  { name: "Ayam Goreng", portion: "1 potong (80g)", calories: 250 },
  { name: "Tahu Goreng", portion: "1 buah (50g)", calories: 120 },
  { name: "Tempe Bacem", portion: "1 potong (50g)", calories: 150 },
  { name: "Telur Rebus", portion: "1 butir", calories: 80 },
  { name: "Sayur Asem", portion: "1 mangkok", calories: 90 },
  { name: "Sate Ayam", portion: "5 tusuk", calories: 300 },
  { name: "Bakwan", portion: "1 buah", calories: 140 },
  { name: "Kerupuk", portion: "1 buah", calories: 70 },
  { name: "Teh Manis", portion: "1 gelas", calories: 100 },
];

// Hitung total kalori
const totalCalories = foods.reduce((sum, item) => sum + item.calories, 0);

export function TableCaloriesActivity() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Aktivitas Kalori</h1>
        <p className="text-muted-foreground text-sm">
          Menampilkan daftar makanan yang telah dikonsumsi hari ini.
        </p>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableCaption>Daftar konsumsi kalori harian kamu</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Makanan</TableHead>
                <TableHead>Porsi</TableHead>
                <TableHead className="text-right">Kalori</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {foods.map((food, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{food.name}</TableCell>
                  <TableCell>{food.portion}</TableCell>
                  <TableCell className="text-right">
                    {food.calories} kkal
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2} className="font-semibold">
                  Total Kalori
                </TableCell>
                <TableCell className="text-right font-bold">
                  {totalCalories} kkal
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
