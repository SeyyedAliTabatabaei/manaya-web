 
type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <div className={`  lg:mx-20 lg:my-12 my-8 mx-4 ${className ?? ""}`}>{children}</div>;
}
