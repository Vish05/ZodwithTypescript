import fs from "fs";
import { z } from "zod";

const responseSchema = z.object({
  users: z.array(
    z.object({
      fname: z.string().min(3),
      lname: z.string(),
      dob: z.string(),
      email: z.string().email(),
      address: z.object({
        doorNo: z.number(),
        street1: z.string(),
        street2: z.string(),
        landmark: z.string(),
        zipcode: z.string()
      }),
      employer: z.object({
        company: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        designation: z.string(),
        skills: z.enum(["FE", "BE", "Cloud"])
      }),
      role: z.enum(["FE Dev", "Sr. FE Dev", "Arch"]),
      githubProfile: z.string().url()
    })
  ),
}); // Run Time Validator

type User = z.infer<typeof responseSchema>; // Infer into typescript type

const printUserData = (results: User) => {
  try {
    responseSchema.parse(results);
    results.users.forEach((user) => {
      console.log(user);
    });
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      console.log("Incorrect response from backend");
    }
  }
};

const data: User = JSON.parse(
  fs.readFileSync("response.json", "utf-8")
);
printUserData(data);
