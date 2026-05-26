type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-content px-6 md:px-10 ${className}`.trim()}>{children}</div>
  );
}
