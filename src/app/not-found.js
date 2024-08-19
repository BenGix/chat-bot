import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center p-16 text-center" >
        <h1>صفحه مور نظر یافت نشد</h1>
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
}
