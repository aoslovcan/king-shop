import { LoginInputFields } from '../model/consts.ts';
import { Control, Controller, DeepRequired, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import { Input } from 'shared/ui';

interface LoginFormProps {
  control: Control<{ username: ''; password: '' }>;
  errors: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>>;
  handleKeyUp: () => void;
}
export const LoginForm = ({ control, errors, handleKeyUp }: LoginFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      {LoginInputFields.map(({ id, name, label }) => (
        <Controller
          key={id}
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              type="text"
              error={!!errors[name]?.message}
              errorMessage={errors[name]?.message}
              onKeyUp={handleKeyUp}
              value={value}
              label={label}
              name={name}
              onChange={onChange}
              inputSize="md"
            />
          )}
        />
      ))}
    </div>
  );
};
