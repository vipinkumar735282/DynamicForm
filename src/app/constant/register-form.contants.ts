import { IForm } from "../interface/form.interface";

export const admissionFormConfig: IForm = {
  formTitle: "Vehicle Information",
  saveBtnTitle: "Save",
  resetBtnTitle: "Reset",
  formControls: [
    {
      name: "stockNumber",
      label: "Stock Number",
      value: "",
      placeholder: "Enter stock number",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Stock number is required"
        }
      ]
    },
    {
      name: "title",
      label: "Title",
      value: "",
      placeholder: "Enter title",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Title is required"
        }
      ]
    },
    {
      name: "vinNumber",
      label: "VIN Number",
      value: "",
      placeholder: "Enter VIN number",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "VIN number is required"
        }
      ]
    },
    {
      name: "cityMPG",
      label: "City MPG",
      value: "",
      placeholder: "Enter city MPG",
      class: "col-md-6",
      type: "number",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "City MPG is required"
        }
      ]
    },
    {
      name: "highwayMPG",
      label: "Highway MPG",
      value: "",
      placeholder: "Enter highway MPG",
      class: "col-md-6",
      type: "number",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Highway MPG is required"
        }
      ]
    },
    {
      name: "registrationDate",
      label: "Registration Date",
      value: "",
      placeholder: "",
      class: "col-md-6",
      type: "date",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Registration date is required"
        }
      ]
    },
    {
      name: "condition",
      label: "Condition",
      value: "",
      placeholder: "",
      class: "col-md-6",
      type: "radio",
      radioOptions: [
         "Used",
         "Unused"
        // { id: 1, value: "used", label: "Used",},
        // { id: 2, value: "unused", label: "Unused" }
      ],
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Condition is required"
        }
      ]
    },
    {
      name: "make",
      label: "Make",
      value: "",
      placeholder: "Select make",
      class: "col-md-6",
      type: "select",
      options: [
        { id: 1, value: "Dodge", label: "Dodge" },
        { id: 2, value: "Honda", label: "Honda" },
        { id: 3, value: "Suzuki", label: "Suzuki" },
        { id: 4, value: "HYUNDAI", label: "HYUNDAI" },
        { id: 5, value: "FORD", label: "FORD" },
        { id: 6, value: "Acura", label: "Acura" }
      ],
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Make is required"
        }
      ]
    },
    {
      name: "model",
      label: "Model",
      value: "",
      placeholder: "Enter model",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Model is required"
        }
      ]
    },
    {
      name: "fuelType",
      label: "Fuel Type",
      value: "",
      placeholder: "Enter fuel type",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Fuel type is required"
        }
      ]
    },
    {
      name: "engine",
      label: "Engine",
      value: "",
      placeholder: "Enter engine",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Engine is required"
        }
      ]
    },
    {
      name: "year",
      label: "Year",
      value: "",
      placeholder: "Enter year",
      class: "col-md-6",
      type: "number",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Year is required"
        }
      ]
    },
    {
      name: "transmission",
      label: "Transmission",
      value: "",
      placeholder: "Enter transmission",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Transmission is required"
        }
      ]
    },
    {
      name: "drive",
      label: "Drive",
      value: "",
      placeholder: "Enter drive type",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Drive type is required"
        }
      ]
    },
    {
      name: "vehicleType",
      label: "Vehicle Type",
      value: [],
      placeholder: "",
      class: "col-md-6",
      type: "checkbox",
      checkboxOptions: ["SUV", "Hatchback", "Sedan"],
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Vehicle type is required"
        }
      ]
    },
    {
      name: "kilometers",
      label: "Kilometers",
      value: "",
      placeholder: "Enter kilometers",
      class: "col-md-6",
      type: "number",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Kilometers is required"
        }
      ]
    },
    {
      name: "features",
      label: "Features",
      value: "",
      placeholder: "Enter features",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Features are required"
        }
      ]
    },
    {
      name: "price",
      label: "Price",
      value: "",
      placeholder: "Enter price",
      class: "col-md-6",
      type: "number",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Price is required"
        }
      ]
    },
    {
      name: "images",
      label: "Images",
      value: "",
      placeholder: "Upload images",
      class: "col-md-6",
      type: "file",
      validators: [
        {
          validatorName: "required",
          required: true,
          message: "Images are required"
        }
      ]
    }
  ],
  get: (arg0: string): unknown => {
    throw new Error("Function not implemented.");
  }
};