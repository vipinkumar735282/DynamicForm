import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interface/form.interface';
import { admissionFormConfig } from '../constant/register-form.contants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  form!: IForm;
  dynamicFormGroup!: FormGroup;
  registerForm = admissionFormConfig
   constructor(private fb: FormBuilder) {
    // this.dynamicFormGroup = this.fb.group({});
  }

  ngOnInit(): void {
    this.form= this.registerForm;
    if (this.form && this.form.formControls) {
      const formGroup: { [key: string]: any } = {}; 
      this.form.formControls.forEach((control: IFormControl) => {
        const controlValidators = this.getValidators(control.validators);
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit(): void {
    if (this.dynamicFormGroup.valid) {
      const formData = this.dynamicFormGroup.value;
      console.log('Form data submitted:', formData);
    } else {
      console.error('Form is invalid. Cannot submit.');
    }
  }

  resetForm(): void {
    this.dynamicFormGroup.reset();
  }

  getValidators(validators: IValidator[]): any[] {
    const formValidators: any[] = [];
    validators.forEach(validator => {
      if (validator.validatorName === 'required') {
        formValidators.push(Validators.required);
      }
      if (validator.validatorName === 'email') {
        formValidators.push(Validators.email);
      }
      if (validator.validatorName === 'minlength') {
        formValidators.push(Validators.minLength(validator.minlength as number));
      }
      if (validator.validatorName === 'maxlength') {
        formValidators.push(Validators.maxLength(validator.maxlength as number));
      }
      if (validator.validatorName === 'pattern') {
        formValidators.push(Validators.pattern(validator.pattern as string));
      }
    });
    return formValidators;
  }

  getValidationErrors(control: IFormControl):string{
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = "";
      control.validators?.forEach((val: IValidator) => {
      if(myFormControl?.hasError( val.validatorName as string)){
        errorMessage = val.message as string;
      }
      
    });
      return errorMessage;
   }
}
