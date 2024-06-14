import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProblemRes } from "@/types/problem";
import getYMD from "@/utils/time";

type Props = {
  problems: ProblemRes[];
};

export default function ProblemsTable({ problems }: Props) {
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
        {problems.map((e) => {
          const { id, name, solvingHistory, createdAt, recentlySolvedAt } = e;
          return (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{solvingHistory}</TableCell>
              <TableCell className="text-right">{getYMD(createdAt)}</TableCell>
              <TableCell className="text-right">
                {getYMD(recentlySolvedAt)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
