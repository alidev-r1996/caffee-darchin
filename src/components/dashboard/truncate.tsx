import { cn } from "@/lib/utils/utils";

const TruncateText = ({ text, className }: {text: string, className?: string}) => {
  return (
    <p title={text} className={cn("text-xs cursor-pointer", className)}>
      {text.toString().slice(0, 15)}
      {text.toString().length > 15 && "..."}
    </p>
  );
};

export default TruncateText;
