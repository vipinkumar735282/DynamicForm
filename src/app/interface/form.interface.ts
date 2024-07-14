export interface IForm{

    get(arg0: string): unknown
        formTitle: string 
        formControls: IFormControl[]
        saveBtnTitle?: string
        resetBtnTitle?: string
    }
    export interface IFormControl{
        name: string;
        label: string;
        value: string | number | string[];
        placeholder: string;
        class: string;
        type: 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'file' | 'radio' | 'textarea' | 'email';
        options?: IOptions[];
        radioOptions?: string[] | undefined
        checkboxOptions?: string[];
        validators: IValidator[];
    }
     export interface IValidator{
        validatorName?: string
        message?: string
        required?: boolean
        pattern?: string |undefined
        minlength?: number
        maxlength?: number
        email?: string
        touched?: boolean
    
    }
    
    interface IOptions{
        // options: any
        label: string
        id?: number
         value?: string
    }