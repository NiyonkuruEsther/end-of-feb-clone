import "@/styles/globals.css";
import localFont from "next/font/local";
// const myFont = localFont({
//   src: [
//     {
//       path: "/nimbus-sans-l/NimbusSanL-Reg.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "/nimbus-sans-l/NimbusSanL-Bol.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--nimbus",
// });
export default function App({ Component, pageProps }) {
  return (
    // <main className={`${myFont.variable} font-sans`}>
    //   <Component {...pageProps} />
    // </main>
    <Component {...pageProps} />
  );
}
