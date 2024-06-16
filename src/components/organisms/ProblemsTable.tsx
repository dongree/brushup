import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PROBLEM_COUNT_PER_PAGE } from "@/constants/limit";
import { ProblemRes } from "@/types/problem";
import getYMD from "@/utils/time";

type Props = {
  problems: ProblemRes[];
  pageNum: number;
};

export default function ProblemsTable({ problems, pageNum }: Props) {
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
        {problems.map((e, idx) => {
          const {
            id,
            name,
            solvingHistory,
            createdAt,
            recentlySolvedAt,
            link,
          } = e;
          return (
            <TableRow key={id}>
              <TableCell className="font-medium">
                {(pageNum - 1) * PROBLEM_COUNT_PER_PAGE + idx + 1}
              </TableCell>
              <TableCell>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </TableCell>
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
