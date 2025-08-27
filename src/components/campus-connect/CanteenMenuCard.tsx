import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const menuItems = [
  { item: "Masala Dosa", price: "₹60" },
  { item: "Samosa (2 pcs)", price: "₹30" },
  { item: "Veg Fried Rice", price: "₹80" },
  { item: "Coffee", price: "₹25" },
  { item: "Veg Thali", price: "₹120" },
];

export function CanteenMenuCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Canteen Specials</CardTitle>
        <CardDescription>Today's menu from the main canteen.</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
