import fs from "fs";

type Skills = 'FE' | 'BE' | 'Cloud'

type Role = 'FE Dev' | 'Sr. FE Dev' | 'Arch'

interface User {
  users: {
    fName: string;
    lName: string;
    dob: string;
    email: string;
    address: UserAddress;
    employer: UserEmployerDetails;
    role: Role
  }[]
}

interface UserAddress {
  doorNo: number;
  street1: string;
  street2: string;
  landmark: string;
  postcode: string
}

interface UserEmployerDetails {
  company: string;
  startDate: string;
  endDate: string;
  designation: string;
  skills: Skills
}

const printUserData = (results: User) => {
  results?.users.forEach((user) => {
    console.log(user);
  });
};

const data: User = JSON.parse(fs.readFileSync("response.json", "utf-8"));
printUserData(data);
