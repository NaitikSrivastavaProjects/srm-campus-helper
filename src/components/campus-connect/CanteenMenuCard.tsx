import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Utensils } from "lucide-react";

const menuItems = [
  { item: "Masala Dosa", price: "Rs 60" },
  { item: "Samosa (2 pcs)", price: "Rs 30" },
  { item: "Veg Fried Rice", price: "Rs 80" },
  { item: "Coffee", price: "Rs 25" },
  { item: "Veg Thali", price: "Rs 120" },
  { item: "Idli", price: "Rs 40" },
  { item: "Plain Dosa", price: "Rs 50" },
  { item: "Uttapam", price: "Rs 70" },
  { item: "Tea", price: "Rs 20" },
  { item: "Paneer Tikka", price: "Rs 100" },
  { item: "Veg Sandwich", price: "Rs 50" },
];

export function CanteenMenuCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Utensils className="h-6 w-6" />
          Canteen Menu
        </CardTitle>
        <CardDescription>Today's menu from the main canteen.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[240px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((menu) => (
                <TableRow key={menu.item}>
                  <TableCell className="font-medium">{menu.item}</TableCell>
                  <TableCell className="text-right">{menu.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
