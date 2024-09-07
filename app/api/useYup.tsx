import * as Yup from "yup";

export const applyValidation = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  address: Yup.string().required("address is required"),
  monthlyRentBudget: Yup.string().required("monthly rent budget is required"),
  employerName: Yup.string().required("employer name is required"),
  employerAddress: Yup.string().required("employer address is required"),
  employmentDuration: Yup.string().required("employment duration is required"),
  annualIncome: Yup.string().required("annual income is required"),
  emergencyContactAddress: Yup.string().required(
    "emergency contact address is required"
  ),
  emergencyContactName: Yup.string().required(
    "emergency contact name is required"
  ),
  numberOfOccupants: Yup.number().required("number of occupants is required"),
  intentionOfUse: Yup.string().required("intention of use is required"),
});

export const requestValidation = Yup.object({
  topic: Yup.string().required("topic is required"),
  description: Yup.string().required("description is required"),
  profession: Yup.string().required("profession is required"),
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("email is required"),
  phoneNumber: Yup.string().required("phone is required"),
});

export const sellFormValidator = Yup.object({
  propertyType: Yup.string().required("property type is required"),
  intention: Yup.string().required("intention is required"),
  reasonForSelling: Yup.string().required("reason for selling is required"),
  address: Yup.string().required("address is required"),
  city: Yup.string().required("city is required"),
  price: Yup.number().required("price is required"),
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("email is required"),
  phoneNumber: Yup.string().required("phone number is required"),
});
