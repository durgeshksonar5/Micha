import React from "react";
import { ShieldCheck, Truck, UserRound, RotateCcw } from "lucide-react";

const FeatureBanner = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "100% Authentic",
      description: "All our products are directly sourced from brands",
    },
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Free Shipping",
      description: "On all orders above ₹299",
    },
    {
      icon: <UserRound size={32} strokeWidth={1.5} />,
      title: "Certified Beauty Advisors",
      description: "Get expert consultations",
    },
    {
      icon: <RotateCcw size={32} strokeWidth={1.5} />,
      title: "Easy Returns",
      description: "Hassle-free pick-ups and refunds",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="bg-[#FFF8F6] rounded-2xl py-12 px-8 border border-[#735240]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start px-2">
              <div className="text-[#4B5563] mb-6">{feature.icon}</div>
              <h3 className="text-[17px] font-bold text-[#111827] mb-3">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-6 text-[#6B7280]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
