import Link from "next/link";

export default ({ href, children, className }) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};
