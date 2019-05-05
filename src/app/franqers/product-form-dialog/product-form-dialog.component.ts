import { Component, OnInit, Inject } from '@angular/core';
import { LeadService } from '../../products/shared/lead.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.scss']
})
export class ProductFormDialogComponent implements OnInit {

  addForm: FormGroup;
  link;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private leadService: LeadService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    this.link =  data.link + '?utm_source=franqbank&utm_campaign=franqbank-nu&utm_term=' + data.traker;
  }

  ngOnInit() {

    // this.leadService.createLead({name: 'Victor', cpf: '12312312312', phone: '(81) 99999-9999'}).subscribe(console.log);

    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });

  }

  onSubmit() {
    if (this.addForm.invalid) {
      console.log('Formulário inválido', 'Erro!');
      return;
    }

    console.log('this.addForm.value: ', this.addForm.value);
    this.leadService.createLead(this.addForm.value)
      .subscribe(() => {
        // redirecionamento para url externa
        window.open(this.link, '_blank');
      });
  }

}
