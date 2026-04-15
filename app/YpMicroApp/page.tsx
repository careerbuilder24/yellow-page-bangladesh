import YpMicroAppClient from "../components/YpMicroAppClient/YpMicroAppClient";
export const metadata = {
  title: "YP Micro App | Smart Business Directory for Local Growth",
  description:
    "Boost your local SEO with YP Micro App. Get discovered on high-traffic websites and attract more nearby customers.",
  keywords: ["business directory", "local SEO", "YP Micro App", "Yellow Pages"],
  alternates: {
    canonical: "https://yellowpagebangladesh.vercel.app/yp-micro-app",
  },
};

export default function Page() {
  return <YpMicroAppClient />;
}
