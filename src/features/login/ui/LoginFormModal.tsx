import React from 'react';
import { Button, Modal } from 'shared/ui';
import { LoginForm } from './LoginForm.tsx';
import { useLoginForm } from '../model/useLoginForm.ts';

interface LoginFormModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const LoginFormModal = ({ isOpen, onCloseModal }: LoginFormModalProps) => {
  const { control, handleLogin, isLoading, isValid, errors, handleKeyUp } = useLoginForm();

  return (
    <Modal
      className="fixed left-2/4 top-2/4 z-[9999] max-h-[90vh] max-w-[600px] -translate-x-2/4 -translate-y-2/4 transform"
      content={<LoginForm handleKeyUp={handleKeyUp} control={control} errors={errors} />}
      isOpen={isOpen}
      onCloseModal={onCloseModal}
      footerComponent={
        <div className="flex flex-row w-full justify-center">
          <Button
            isLoading={isLoading}
            shape="square"
            className="mb-4 w-full"
            disabled={!isValid}
            onClick={handleLogin}
            label="Dodaj"
            variant="contained"
            color="primary"
            size="base"
          />
        </div>
      }
    />
  );
};
