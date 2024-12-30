
function EmailIcon(props: any) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_104_502)">
        <path
          d="M4.403 19.913h2.983V12.67L3.125 9.473v9.162c0 .707.573 1.278 1.278 1.278z"
          fill="#4285F4"
        />
        <path
          d="M17.614 19.913h2.983c.707 0 1.278-.573 1.278-1.278V9.473l-4.261 3.196"
          fill="#34A853"
        />
        <path
          d="M17.614 7.13v5.54l4.261-3.197V7.768c0-1.58-1.805-2.482-3.068-1.534"
          fill="#FBBC04"
        />
        <path
          d="M7.386 12.669v-5.54l5.114 3.835 5.114-3.835v5.54L12.5 16.504"
          fill="#EA4335"
        />
        <path
          d="M3.125 7.768v1.705l4.261 3.196v-5.54l-1.193-.895c-1.265-.948-3.068-.047-3.068 1.534z"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0_104_502">
          <path fill="#fff" transform="translate(.5 .878)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default EmailIcon;
