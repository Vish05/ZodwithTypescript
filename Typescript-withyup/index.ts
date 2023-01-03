import fs from "fs";
import { z } from "zod";

const responseSchema = z.object({
  results: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      job: z.string(),
    })
  ),
});  // Run Time Schema

type Result = z.infer<typeof responseSchema>; // Compile Time Schema

const printJobs = (results: Result) => {
  if (responseSchema.safeParse(results).success) {
    results?.results.forEach(({ job }) => {
      console.log(job);
    });
  } else {
    console.log("Bad data");
  }
};

// printJobs({
//   results: [
//     {
//       id: 1,
//       name: "John",
//       job: "developer",
//     },
//   ],
// });

const data: Result = JSON.parse(fs.readFileSync("data.json", "utf-8"));
printJobs(data);
