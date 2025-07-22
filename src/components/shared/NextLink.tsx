import Link from "next/link";
import React, { ReactNode } from "react";

interface NextLinkProps {
  href: string;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const NextLink = ({ href, className, disabled, children }: NextLinkProps) => {
  return (
    <>
      {disabled ? (
        <button disabled={disabled} className={`${className}`}> {children} </button>
      ) : (
        <Link className={`${className}`} href={href}>
          {children}
        </Link>
      )}
    </>
  );
};

export default NextLink;
