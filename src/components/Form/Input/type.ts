import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface IValuesCompleteInput{
  id: string;
  disabled?: boolean;
  label?: string;
  type: 'text' | 'email' | 'number' | 'password';
  error?: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: FieldError;
  }