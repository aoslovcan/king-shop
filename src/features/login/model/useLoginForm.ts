import { useForm } from 'react-hook-form';
import React, { useCallback, useMemo } from 'react';
import { LoginFormFields } from './types.ts';
import { useLoginMutation } from 'entities/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useModal } from 'app/modal';
import { useNotification } from 'app/notification';

const defaultValues = {
  [LoginFormFields.USERNAME]: '',
  [LoginFormFields.PASSWORD]: ''
};

export const schema = yup.object().shape({
  [LoginFormFields.USERNAME]: yup.string().min(2, 'It must contain at least 2 characters!'),
  [LoginFormFields.PASSWORD]: yup.string().min(5, 'It must contain at least 5 characters!')
});

export const useLoginForm = () => {
  const {
    control,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const [login, { isLoading }] = useLoginMutation();
  const { closeModal } = useModal();
  const { showNotification } = useNotification();

  // Use enum values with watch
  const username = watch(LoginFormFields.USERNAME);
  const password = watch(LoginFormFields.PASSWORD);

  // Memoize the form data
  const formData = useMemo(
    () => ({
      username,
      password
    }),
    [username, password]
  );

  const handleLogin = useCallback(async () => {
    if (username && password) {
      try {
        const data = await login({
          username: username,
          password: password
        }).unwrap();

        if (!data.error) {
          window.location.reload();
          closeModal('loginModal');
          return;
        }

        showNotification(data?.message, 'ERROR');
      } catch (error) {
        showNotification(error.data?.message, 'ERROR');
      }
    }
  }, [username, password]);

  const isValid =
    Object.values(formData).every((value) => (value ?? '') !== '') &&
    Object.keys(errors).length === 0; // Ensure errors object is empty

  const handleKeyUp = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && isValid) {
      await handleLogin(); // Trigger form submission on Enter
    }
  };

  return {
    control,
    errors,
    formData,
    handleLogin,
    handleKeyUp,
    isLoading,
    isValid
  };
};
