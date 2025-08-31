export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pad-x-xl pt-20">{children}</div>;
}
