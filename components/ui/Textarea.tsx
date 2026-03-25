import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = ({ label, error, className, ...props }: TextareaProps) => {
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
      <textarea
        className={cn(
          "w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground transition-all resize-vertical",
          error && "border-destructive focus:ring-destructive focus:border-destructive",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
