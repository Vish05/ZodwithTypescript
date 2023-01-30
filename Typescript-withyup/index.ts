import * as yup from "yup";
import type { TypeOf } from "yup";
import fs from "fs";

const responseSchema = yup
  .object()
  .required()
  .shape({
    users: yup
      .array()
      .required()
      .of(
        yup.object().required().shape({
          fname: yup.string().required(),
          lname: yup.string().required(),
          dob: yup.string().required(),
          email: yup.string().email(),
          address: yup.object().required().shape({
            doorNo: yup.number().required(),
            street1: yup.string().required(),
            street2: yup.string().required(),
            landmark: yup.string().required(),
            zipcode: yup.string().required()
          }),
          employer: yup.object().required().shape({
            company: yup.string().required(),
            startDate: yup.string().required(),
            endDate: yup.string().required(),
            designation: yup.string().required(),
            skills: yup.mixed().oneOf(["FE", "BE", "Cloud"])
          }),
          role: yup.mixed().oneOf(["FE Dev", "Sr. FE Dev", "Arch"]),
          githubProfile: yup.string().url()
        })
      ),
  }); // Run Time Schema

type Result = TypeOf<typeof responseSchema>; // Infer into typescript type

const printUserData = (results: Result) => {
  responseSchema
  .validate(results)
  .then(function(value) { console.log(value); })
  .catch(function(err) {
    console.log("Incorrect response from backend");
  });
};

const data: Result = JSON.parse(fs.readFileSync("./response.json").toString());
printUserData(data);
