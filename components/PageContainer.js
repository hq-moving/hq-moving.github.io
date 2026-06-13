export default function PageContainer({ children, className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-12 2xl:max-w-7xl 3xl:max-w-8xl ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
