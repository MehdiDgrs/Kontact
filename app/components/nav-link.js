import Link from "next/link";

export default ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};
