import Image from "next/image";
import chatSticker from "@/assets/image/chat-illustration.png";
import { AddSquare } from "iconsax-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full  flex flex-col justify-center items-center bg-lighter gap-12">
      <div className="relative flex justify-center">
        <Image
          className="  absolute top-2"
          width={126}
          height={126}
          src={chatSticker}
          alt="chat"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="153"
          height="135"
          viewBox="0 0 153 135"
          fill="none"
        >
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.6091 26.3127C54.1315 17.3074 61.3889 1.09002 76.0138 0.522224C90.9864 -0.0590672 101.028 14.0919 112.633 23.5941C126.925 35.2955 146.174 43.3311 150.281 61.3303C155.127 82.5633 151.053 107.437 135.154 122.277C119.381 137 95.2232 135.024 73.7401 132.772C54.5051 130.756 36.0074 124.379 22.5447 110.473C9.05581 96.5392 -2.65615 77.3359 1.83524 58.4969C6.01188 40.9781 28.4266 37.3972 42.6091 26.3127Z"
            fill="url(#paint0_linear_1_14)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_14"
              x1="31.1043"
              y1="25.3128"
              x2="129.697"
              y2="127.549"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3AB9C9" />
              <stop offset="1" stopColor="#B3E4EA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-light text-center">
        <p>
          لیست چت شما خالی است. <br />
          با کلیک روی دکمه‌ی زیر، چت با بات را شروع کنید.‌
        </p>
      </div>
      <Link href={"/chat"}>
        <button className="flex items-center gap-2.5 bg-blue rounded-xl w-fit shadow-blue px-4 py-3.5 text-white">
          <AddSquare size="32" color="#fff" variant="Outline" />
          <span className=" text-sm"> پرسیدن سوال</span>
        </button>
      </Link>
    </section>
  );
}
