import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-utils',
  imports: [],
  template: `<p>form-utils works!</p>`,
  styleUrl: './form-utils.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUtils { 
  static  isValidField(field:string, myForm:any):boolean | null {
    return myForm.controls[field].errors
    && myForm.controls[field].touched;
  }
  static getfieldError(fieldName:string, myForm:any):string | null {
    if(!myForm.controls[fieldName]){
      return null;
    }
    const errors = myForm.controls[fieldName].errors || {};
    for (const key of Object.keys(errors)){
      switch (key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
        case 'email':
          return 'No es un correo válido';
      }
    }
    return null;
  }
}
