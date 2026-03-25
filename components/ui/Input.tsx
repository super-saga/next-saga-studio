import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground transition-all",
          error && "border-destructive focus:ring-destructive focus:border-destructive",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
