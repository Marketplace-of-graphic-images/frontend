import React, { useCallback, useEffect, useState } from 'react';

type Values = Record<string, string>;
type CheckboxValues = Record<string, boolean>;
type Errors = Record<string, boolean>;

const useValidation = () => {
  const [values, setValues] = useState<Values>({});
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>({});
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState<HTMLFormElement | null>(null);

  const [errors, setErrors] = useState<Errors>({});
  const [errorsText, setErrorsText] = useState<Values>({});
  const [errorsDescription, setErrorsDescription] = useState<Values>({});

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

    if (type === 'checkbox') {
      setCheckboxValues({ ...checkboxValues, [name]: target.checked });
    } else {
      setValues({ ...values, [name]: value });
    }

    let errorText = 'Использованы недопустимые символы';
    let errorDescription = '';

    switch (true) {
      case value === '':
        errorText = 'Это обязательное поле';
        break;

      case name === 'username':
        errorDescription = 'Минимальная длина: 3 символа. Допускаются только буквы латинского алфавита, цифры и символы:  - _ !  .';
        break;

      case name === 'email':
        errorText = 'Некорректный email';
        errorDescription = 'Допускаются только буквы латинского алфавита, цифры и символы:  @ _ -  .';
        break;

      case name === 'password':
        errorDescription = 'Минимальная длина: 8 символов . Можно использовать только буквы латинского алфавита, цифры и символы: - _ ! .';
        break;

      default: errorText = '';
    }

    setErrors({ ...errors, [name]: !target.validity.valid });
    setErrorsText({ ...errorsText, [name]: errorText });
    setErrorsDescription({ ...errorsDescription, [name]: errorDescription });

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
    errorsText,
    errorsDescription,
    isValid,
    resetForm,
  };
};

export default useValidation;
