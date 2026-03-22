import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: string
  hint?: string
}

export function Input({ label, error, success, hint, className, required, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        required={required}
        className={cn(
          'w-full h-11 px-4 rounded-md bg-bg-secondary text-text border border-border',
          'placeholder:text-subtle text-base transition-all',
          'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error   && 'border-error focus:border-error focus:ring-error/20',
          success && 'border-success focus:border-success focus:ring-success/20',
          className,
        )}
        {...props}
      />
      {hint    && !error && <p className="text-xs text-muted">{hint}</p>}
      {error   && <p className="text-xs text-error">⚠ {error}</p>}
      {success && <p className="text-xs text-success">✓ {success}</p>}
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export function Textarea({ label, error, hint, className, required, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <textarea
        required={required}
        className={cn(
          'w-full px-4 py-3 rounded-md bg-bg-secondary text-text border border-border',
          'placeholder:text-subtle text-base transition-all resize-none',
          'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20',
          error && 'border-error focus:border-error focus:ring-error/20',
          className,
        )}
        {...props}
      />
      {hint  && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && <p className="text-xs text-error">⚠ {error}</p>}
    </div>
  )
}
