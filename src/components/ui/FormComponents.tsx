import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';
import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = ''
}) => {
  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value || ''}
        onChange={(e) => {
          const val = type === 'number' ? parseFloat(e.target.value) || undefined : e.target.value;
          onChange(val as string | number);
        }}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && (
        <motion.div 
          className="flex items-center text-red-600 text-sm mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </motion.div>
      )}
    </motion.div>
  );
};

interface FormSelectProps {
  id: string;
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
  className?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  error,
  className = ''
}) => {
  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <motion.div 
          className="flex items-center text-red-600 text-sm mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </motion.div>
      )}
    </motion.div>
  );
};

interface FormTextareaProps {
  id: string;
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
  className?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  required = false,
  error,
  className = ''
}) => {
  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-vertical ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && (
        <motion.div 
          className="flex items-center text-red-600 text-sm mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </motion.div>
      )}
    </motion.div>
  );
};

interface SuccessMessageProps {
  title: string;
  message: string;
  additionalInfo?: string;
  onReset?: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  message,
  additionalInfo,
  onReset
}) => {
  return (
    <motion.div 
      className="bg-green-50 border border-green-200 p-8 rounded-lg text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      </motion.div>
      <h3 className="text-2xl font-bold text-green-800 mb-4">{title}</h3>
      <p className="text-green-700 mb-6">{message}</p>
      {additionalInfo && (
        <div className="text-green-600 text-sm mb-4">
          {additionalInfo}
        </div>
      )}
      {onReset && (
        <motion.button
          onClick={onReset}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Another Guide
        </motion.button>
      )}
    </motion.div>
  );
};

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading...' }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <p className="text-gray-600 mt-4">{message}</p>
    </motion.div>
  );
};

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-500">{current}/{total}</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div 
          className="bg-yellow-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="text-center text-xs text-gray-500 mt-1">
        {percentage}% complete
      </div>
    </div>
  );
};
