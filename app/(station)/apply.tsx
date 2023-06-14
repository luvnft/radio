import { getHome } from "@/sanity.client";
import { urlForImage } from "@/sanity.image";
import Image from "next/image";

export default async function ApplySection() {
  const home = await getHome();

  return (
    <section className="relative z-auto overflow-hidden px-8 py-40">
      <Image
        src={urlForImage(home.apply_background).url()}
        className="object-cover"
        sizes="100vw"
        quality={25}
        alt=""
        fill
      />

      <div className="absolute inset-0 backdrop-blur-xl" />

      <div className="relative flex flex-col items-center gap-8 px-6 text-white">
        <h2 className="text-center font-kinfolk text-mobile-kinfolk-headline uppercase md:text-kinfolk-headline">
          {home.apply_heading}
        </h2>

        <p className="max-w-xl text-center text-mobile-inter-text md:text-inter-text">
          {home.apply_subheading}
        </p>

        <a
          href={home.apply_cta_url}
          className="whitespace-nowrap rounded-full bg-transparent px-20 py-[1.125rem] text-mobile-inter-text text-white ring-4 ring-inset ring-white md:text-inter-text"
        >
          {home.apply_cta_text}
        </a>
      </div>

      <svg
        className="sr-only"
        aria-hidden="true"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="wave-top"
            d="M0,135L10,122.5C20,110,40,85,60,67.5C80,50,100,40,120,50C140,60,160,90,180,95C200,100,220,80,240,70C260,60,280,60,300,67.5C320,75,340,90,360,92.5C380,95,400,85,420,75C440,65,460,55,480,57.5C500,60,520,75,540,80C560,85,580,80,600,75C620,70,640,65,660,70C680,75,700,90,720,102.5C740,115,760,125,780,130C800,135,820,135,840,125C860,115,880,95,900,85C920,75,940,75,960,65C980,55,1000,35,1020,40C1040,45,1060,75,1080,75C1100,75,1120,45,1140,47.5C1160,50,1180,85,1200,92.5C1220,100,1240,80,1260,80C1280,80,1300,100,1320,95C1340,90,1360,60,1380,52.5C1400,45,1420,60,1430,67.5L1440,75L1440,150L1430,150C1420,150,1400,150,1380,150C1360,150,1340,150,1320,150C1300,150,1280,150,1260,150C1240,150,1220,150,1200,150C1180,150,1160,150,1140,150C1120,150,1100,150,1080,150C1060,150,1040,150,1020,150C1000,150,980,150,960,150C940,150,920,150,900,150C880,150,860,150,840,150C820,150,800,150,780,150C760,150,740,150,720,150C700,150,680,150,660,150C640,150,620,150,600,150C580,150,560,150,540,150C520,150,500,150,480,150C460,150,440,150,420,150C400,150,380,150,360,150C340,150,320,150,300,150C280,150,260,150,240,150C220,150,200,150,180,150C160,150,140,150,120,150C100,150,80,150,60,150C40,150,20,150,10,150L0,150Z"
          />

          <path
            id="wave-bottom"
            d="M0,30L12.6,35C25.3,40,51,50,76,52.5C101.1,55,126,50,152,47.5C176.8,45,202,45,227,50C252.6,55,278,65,303,67.5C328.4,70,354,65,379,57.5C404.2,50,429,40,455,52.5C480,65,505,100,531,105C555.8,110,581,85,606,75C631.6,65,657,70,682,72.5C707.4,75,733,75,758,80C783.2,85,808,95,834,85C858.9,75,884,45,909,40C934.7,35,960,55,985,75C1010.5,95,1036,115,1061,112.5C1086.3,110,1112,85,1137,85C1162.1,85,1187,110,1213,120C1237.9,130,1263,125,1288,112.5C1313.7,100,1339,80,1364,62.5C1389.5,45,1415,30,1440,22.5C1465.3,15,1491,15,1516,22.5C1541.1,30,1566,45,1592,65C1616.8,85,1642,110,1667,115C1692.6,120,1718,105,1743,82.5C1768.4,60,1794,30,1806,15L1818.9,0L1818.9,150L1806.3,150C1793.7,150,1768,150,1743,150C1717.9,150,1693,150,1667,150C1642.1,150,1617,150,1592,150C1566.3,150,1541,150,1516,150C1490.5,150,1465,150,1440,150C1414.7,150,1389,150,1364,150C1338.9,150,1314,150,1288,150C1263.2,150,1238,150,1213,150C1187.4,150,1162,150,1137,150C1111.6,150,1086,150,1061,150C1035.8,150,1011,150,985,150C960,150,935,150,909,150C884.2,150,859,150,834,150C808.4,150,783,150,758,150C732.6,150,707,150,682,150C656.8,150,632,150,606,150C581.1,150,556,150,531,150C505.3,150,480,150,455,150C429.5,150,404,150,379,150C353.7,150,328,150,303,150C277.9,150,253,150,227,150C202.1,150,177,150,152,150C126.3,150,101,150,76,150C50.5,150,25,150,13,150L0,150Z"
          />
        </defs>
      </svg>

      <div className="pointer-events-none absolute -bottom-0.5 left-0 right-0 max-w-none">
        <svg
          className="text-voices-gray xl:h-[9.375rem] xl:w-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#wave-top" fill="currentColor" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -top-0.5 left-0 right-0 max-w-none">
        <svg
          className="rotate-180 text-voices-beige xl:h-[9.375rem] xl:w-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#wave-bottom" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
