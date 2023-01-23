export interface Patients {
  id?: number;
  identification: {
    name: string;
    gender: string;
    birth: string;
    cpf: string;
    rg: string;
    relationship: string;
    phone: string;
    email: string;
    nationality: string;
    allergy: string;
    emergencyContact: string;
  };
  insurance: {
    name: string;
    number: string;
    validity: string;
  };
  address: {
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    reference: string;
  };
  exams: {
    id?: number;
    name: string;
    date: string;
    time: string;
    type: string;
    lab: string;
    url: string;
    result: string;
  }[];
  appointments: {
    id?: number;
    motive: string;
    date: string;
    time: string;
    description: string;
    medication: string;
    precautions: string;
  }[];
}
