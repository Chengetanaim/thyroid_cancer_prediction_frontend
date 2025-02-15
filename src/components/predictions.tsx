import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const predictions = [
  {
    predictionId: "INV001",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Jan 12, 2023 08:32:12 AM",
  },
  {
    predictionId: "INV002",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Jan 14, 2023 08:32:12 AM",
  },
  {
    predictionId: "INV003",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Jan 17, 2023 08:32:12 AM",
  },
  {
    predictionId: "INV004",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Jan 19, 2023 08:32:12 AM",
  },
  {
    predictionId: "INV005",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Jan 23, 2023 08:32:12 AM",
  },
  {
    predictionId: "INV006",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Feb 08, 2023 08:32:12 AM",
  },
  {
    predictionId: "INV007",
    predictionStatus: "Positive",
    predictionProbability: "87.4%",
    createdAt: "Mar 15, 2023 08:32:12 AM",
  },
];

export function Predictions() {
  return (
    <>
      <div className="py-6 px-48">
        <h1 className="text-2xl font-semibold mb-5">Past Predictions</h1>
        <Table>
          <TableCaption>A list of your recent predictions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Prediction ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Probability</TableHead>
              <TableHead className="text-right">Date Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {predictions.map((prediction) => (
              <TableRow key={prediction.predictionId}>
                <TableCell className="font-medium">
                  {prediction.predictionId}
                </TableCell>
                <TableCell>{prediction.predictionStatus}</TableCell>
                <TableCell>{prediction.predictionProbability}</TableCell>
                <TableCell className="text-right">
                  {prediction.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
