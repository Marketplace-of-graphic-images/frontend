import React, { useCallback } from 'react';

type Values = Record<string, string>;
type CheckboxValues = Record<string, boolean>;
type Errors = Record<string, boolean>;

const useValidation = () => {
  const [values, setValues] = React.useState<Values>({});
  const [checkboxValues, setCheckboxValues] = React.useState<CheckboxValues>({});
  const [errors, setErrors] = React.useState<Errors>({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value, type } = target;

    switch (true) {
      case type === 'checkbox':
        setCheckboxValues({ ...checkboxValues, [name]: target.checked });
        break;
      default:
        setValues({ ...values, [name]: value });
    }

    setErrors({ ...errors, [name]: !!target.validationMessage });

    const form = target.closest('form');
    setIsValid(form !== null ? form.checkValidity() : isValid);
  };

  const resetForm = useCallback(
    (
      newValues: Values = {},
      newCheckboxValues: CheckboxValues = {},
      newErrors: Errors = {},
      newIsValid = false,
    ) => {
      setValues(newValues);
      setCheckboxValues(newCheckboxValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    checkboxValues,
    handleChange,
    errors,
    isValid,
    resetForm,
  };
};

export default useValidation;
