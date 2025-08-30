
interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export default function SectionTitle({ children, className }: SectionTitleProps) {
    return (
      <div className="text-center">  
        <h2
          className={`inline-block text-2xl font-black text-text-primary relative
            after:content-[''] after:block after:w-full after:h-1 after:bg-primary after:mt-2
            ${className || ""}`}
        >
          {children}
        </h2>
      </div>
    );
  }