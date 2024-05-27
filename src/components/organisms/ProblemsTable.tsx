import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: 1,
    name: "숫자 합치기2",
    history: "OXXO",
    createdAt: "2024-04-01",
    recentlySolvedAt: "2024-04-08",
  },
  {
    id: 2,
    name: "숫자 합치기2",
    history: "OXXO",
    createdAt: "2024-04-01",
    recentlySolvedAt: "2024-04-08",
  },
  {
    id: 3,
    name: "숫자 합치기2",
    history: "OXXO",
    createdAt: "2024-04-01",
    recentlySolvedAt: "2024-04-08",
  },
  {
    id: 4,
    name: "숫자 합치기2",
    history: "OXXO",
    createdAt: "2024-04-01",
    recentlySolvedAt: "2024-04-08",
  },
];

export default function ProblemsTable() {
  return (
    <Table className="w-[800px] ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>History</TableHead>
          <TableHead className="text-right">Created At</TableHead>
          <TableHead className="text-right">Recebtly Solved At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((e) => {
          const { id, name, history, createdAt, recentlySolvedAt } = e;
          return (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{history}</TableCell>
              <TableCell className="text-right">{createdAt}</TableCell>
              <TableCell className="text-right">{recentlySolvedAt}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
