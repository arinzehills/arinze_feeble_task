/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

const Button = ({
  width,
  height,
  children,
  isCircular,
  buttonColor = "bg-tab-gradient",
  loading = false,
  textColor = "text-white",
  prefixIcon,
  suffixIcon,
  withBorder = true,
  borderClass = "border border-accent",
  ...rest
}: any) => {
  let { disabled } = loading ? { disabled: loading } : rest;

  const styles = `hover:opacity-12 flex items-center justify-center font-medium py-2  px-4 transition-colors duration-200 ${
    isCircular ? "rounded-full" : "rounded-xl"
  } ${disabled ? "cursor-not-allowed opacity-40" : " cursor-pointer"}`;
  const widthStyle = width ? `w-${width}` : "w-44";
  const heightStyle = height ? `${height}` : "h-12";
  borderClass = withBorder && `${borderClass}`;
  const classNames = `${buttonColor} ${textColor} inline-block ${styles} ${widthStyle} ${heightStyle} ${borderClass}`;

  return (
    <button
      className={classNames}
      {...rest}
      style={{
        minHeight: "35px",
        ...rest,
        // background: disabled && "var(--light-blue)",
      }}
    >
      {!loading ? (
        <>
          {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
          {children}
          {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
        </>
      ) : (
        <span>Loading</span>
      )}
    </button>
  );
};

export default Button;
