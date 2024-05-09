export type ContactInformation = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  address: string;
};

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
};

export interface Apply {
  propertyId: string;
  intentionOfUse: string;
  moveInDate: string;
  ContactInformation: ContactInformation;
  PersonalInformation: PersonalInformation;
}
