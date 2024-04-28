export type ContactInformation = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    countryCode: string;
    email: string;
    address: string;
}

export type PersonalInformation = {
    dateOfBirth: string;
    monthlyRentBudget: string;
    employerName: string;
    employerAddress: string;
    employmentDuration: string;
    annualIncome: string;
    emergencyContact: string;
    emergencyContactName: string;
    numberOfOccupants: number;
}

export interface Apply {
  userEmail: string;
  propertyId: string;
  intensionOfUse: string;
  moveInDate: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  address: string;
  dateOfBirth: string;
  monthlyRentBudget: string;
  employerName: string;
  employerAddress: string;
  employmentDuration: string;
  annualIncome: string;
  emergencyContact: string;
  emergencyContactName: string;
  numberOfOccupants: number;
}