import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Food } from "@/types/food/food";
import { buildFromAppURL } from "@/utils/misc";
import Image from "next/image";
import Link from "next/link";

interface CardListFoodMenuProps {
  data?: Food[];
  isLoading?: boolean;
}

export default function CardListFoodMenu({
  data,
  isLoading,
}: CardListFoodMenuProps) {
  if (isLoading) {
    return (
      <>
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-0 p-0 shadow-none">
            <CardHeader className="p-0">
              <div className="relative h-45 w-full md:h-40 lg:h-50">
                <Skeleton className="h-full w-full rounded-md" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1 p-0">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </CardContent>
          </Card>
        ))}
      </>
    );
  }

  return (
    <>
      {data?.map((food) => (
        <Link key={food.id} href={`/dashboard/food-menu/${food.id}`}>
          <Card className="border-0 p-0 shadow-none">
            <CardHeader className="p-0">
              <div className="relative h-45 w-full md:h-40 lg:h-50">
                <Image
                  src={buildFromAppURL(food.image)}
                  alt={food.nama}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-1 p-0">
              <h1 className="line-clamp-1 font-semibold">{food.nama}</h1>
              <p className="text-muted-foreground">{food.kalori}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
