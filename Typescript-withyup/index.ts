import * as yup from "yup";
import type { TypeOf } from "yup";
import fs from "fs";

const responseSchema = yup
  .object()
  .required()
  .shape({
    results: yup
      .array()
      .required()
      .of(
        yup.object().required().shape({
          name: yup.string().required(),
          id: yup.number().required(),
          job: yup.string().required(),
        })
      ),
  }); // Run Time Schema

type Result = TypeOf<typeof responseSchema>; // Compile Time Schema

const printJobs = (results: Result) => {
  if (responseSchema.validateSync(results)) {
    console.log(results.results?.map(({ job }) => `${job}`).join("\n"));
  } else {
    console.error("Bad input");
  }
};

const data: Result = JSON.parse(fs.readFileSync("./data.json").toString());
printJobs(data);
