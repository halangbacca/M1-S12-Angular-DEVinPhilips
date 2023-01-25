import { CepService } from './../cep.service';
import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent implements OnInit {
  regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  regexPhone =
    /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

  regexCPF = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

  regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  patient: Patients = {
    id: 0,
    identification: {
      name: '',
      gender: '',
      birth: '',
      cpf: '',
      rg: '',
      relationship: '',
      phone: '',
      email: '',
      nationality: '',
      allergy: '',
      emergencyContact: '',
    },
    insurance: {
      name: '',
      number: '',
      validity: '',
    },
    address: {
      cep: '',
      city: '',
      state: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      reference: '',
    },
  };

  constructor(
    private service: PatientsService,
    private router: Router,
    private cep: CepService
  ) {}

  ngOnInit(): void {}

  consultCep(value: any) {
    this.cep.search(value).subscribe((data) => this.populateForm(data));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

  populateForm(data: any) {
    (this.patient.address.cep = data.cep),
      (this.patient.address.street = data.logradouro),
      (this.patient.address.neighborhood = data.bairro),
      (this.patient.address.city = data.localidade),
      (this.patient.address.state = data.uf);
  }

  createPatient() {
    if (this.patient.identification.name === '') {
      Swal.fire({
        icon: 'error',
        title: 'Nome',
        text: 'Digite o seu nome completo!',
      });
      return;
    }
    if (this.patient.identification.name.length > 64) {
      Swal.fire({
        icon: 'error',
        title: 'Nome',
        text: 'O número máximo de caracteres permitidos é 64!',
      });
      return;
    }
    if (this.patient.identification.name.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Nome',
        text: 'O número mínimo de caracteres permitidos é 8!',
      });
      return;
    }
    if (this.patient.identification.gender === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gênero',
        text: 'Insira o seu gênero!',
      });
      return;
    }
    if (this.patient.identification.birth === '') {
      Swal.fire({
        icon: 'error',
        title: 'Data de Nascimento',
        text: 'Insira a sua data de nascimento!',
      });
      return;
    }
    if (!this.patient.identification.birth.match(this.regexDate)) {
      Swal.fire({
        icon: 'error',
        title: 'Data de nascimento',
        text: 'Formato de data inválido!',
      });
      return;
    }
    if (this.patient.identification.cpf === '') {
      Swal.fire({
        icon: 'error',
        title: 'CPF',
        text: 'Insira o número do seu CPF!',
      });
      return;
    }
    if (!this.patient.identification.cpf.match(this.regexCPF)) {
      Swal.fire({
        icon: 'error',
        title: 'CPF',
        text: 'Número de CPF inválido!',
      });
      return;
    }
    if (this.patient.identification.rg === '') {
      Swal.fire({
        icon: 'error',
        title: 'Identidade',
        text: 'Insira o número da sua identidade!',
      });
      return;
    }
    if (this.patient.identification.rg.length > 20) {
      Swal.fire({
        icon: 'error',
        title: 'Identidade',
        text: 'O número máximo de caracteres permitidos é 20!',
      });
      return;
    }
    if (this.patient.identification.relationship === '') {
      Swal.fire({
        icon: 'error',
        title: 'Estado civil',
        text: 'Insira o seu estado civil!',
      });
      return;
    }
    if (this.patient.identification.phone === '') {
      Swal.fire({
        icon: 'error',
        title: 'Telefone',
        text: 'Insira seu telefone!',
      });
      return;
    }
    if (!this.patient.identification.phone.match(this.regexPhone)) {
      Swal.fire({
        icon: 'error',
        title: 'Telefone',
        text: 'Número de telefone inválido!',
      });
      return;
    }
    if (this.patient.identification.email !== '') {
      if (!this.patient.identification.email.match(this.regexEmail)) {
        Swal.fire({
          icon: 'error',
          title: 'E-mail',
          text: 'Endereço de e-mail inválido',
        });
        return;
      }
    }
    if (this.patient.identification.nationality === '') {
      Swal.fire({
        icon: 'error',
        title: 'Naturalidade',
        text: 'Insira a sua naturalidade!',
      });
      return;
    }
    if (this.patient.identification.nationality.length > 64) {
      Swal.fire({
        icon: 'error',
        title: 'Naturalidade',
        text: 'O número máximo de caracteres permitidos é 64!',
      });
      return;
    }
    if (this.patient.identification.nationality.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Naturalidade',
        text: 'O número mínimo de caracteres permitidos é 8!',
      });
      return;
    }
    if (this.patient.identification.emergencyContact === '') {
      Swal.fire({
        icon: 'error',
        title: 'Contato de emergência',
        text: 'Insira o número de telefone do seu contato de emergência!',
      });
      return;
    }
    if (!this.patient.identification.emergencyContact.match(this.regexPhone)) {
      Swal.fire({
        icon: 'error',
        title: 'Contato de emergência',
        text: 'Número de telefone inválido!',
      });
      return;
    }
    if (this.patient.address.cep === '') {
      Swal.fire({
        icon: 'error',
        title: 'CEP',
        text: 'Insira o CEP da sua rua!',
      });
      return;
    }
    if (this.patient.address.city === '') {
      Swal.fire({
        icon: 'error',
        title: 'Cidade',
        text: 'Insira o nome da sua cidade!',
      });
      return;
    }
    if (this.patient.address.state === '') {
      Swal.fire({
        icon: 'error',
        title: 'Estado',
        text: 'Insira o estado de residência!',
      });
      return;
    }
    if (this.patient.address.street === '') {
      Swal.fire({
        icon: 'error',
        title: 'Logradouro',
        text: 'Insira o nome da sua rua!',
      });
      return;
    }
    if (this.patient.address.number === '') {
      Swal.fire({
        icon: 'error',
        title: 'Número da casa',
        text: 'Insira o número da sua casa!',
      });
      return;
    }
    if (this.patient.address.neighborhood === '') {
      Swal.fire({
        icon: 'error',
        title: 'Bairro',
        text: 'Insira o nome do seu bairro!',
      });
      return;
    }

    this.service.createPatient(this.patient).subscribe(() => {
      localStorage.setItem('session', JSON.stringify('Cadastro de Consulta'));
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Paciente cadastrado com sucesso!',
      });
      this.router.navigate(['/appointment-registration']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
