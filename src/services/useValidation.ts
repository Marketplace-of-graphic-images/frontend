import React, { useCallback, useEffect, useState } from 'react';

type Values = Record<string, string>;
type CheckboxValues = Record<string, boolean>;
type Errors = Record<string, boolean>;

const useValidation = () => {
  const [values, setValues] = useState<Values>({});
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>({});
  const [errors, setErrors] = useState<Errors>({});
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState<HTMLFormElement | null>(null);

  useEffect(() => {
    if (form !== null) {
      setIsValid(form.checkValidity());
      Object.keys(values).forEach((name: string) => {
        const input: HTMLInputElement = form[name];
        if (input?.validity?.valid) {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: true }));
        }
      });
    }
  }, [values, checkboxValues, form]);

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

    setErrors({ ...errors, [name]: !target.validity.valid });

    if (form === null) setForm(target.closest('form'));
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
    [setValues, setCheckboxValues, setErrors, setIsValid],
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
