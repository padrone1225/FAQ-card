/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FAQItem } from "../components/FAQItem";

const Titles = [
  {
    title: "How many team members can I invite?",
    script:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    title: "What is the maximum file upload size?",
    script:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    title: "How do I reset my password?",
    script:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    title: "Can I cancel my subscription?",
    script:
      "Yes! Send us a message and we will process your request no questions asked.",
  },
  {
    title: "Do you provide additional support?",
    script:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const Home: NextPage = () => {
  const [selectId, setSelectId] = useState(3);
  return (
    <div className="bg-gradient-to-b from-soft-violet to-soft-blue h-screen">
      <div className="rounded-3xl bg-white w-[95%] max-w-[920px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[510px]">
        <div className="grid grid-cols-2 gap-3">
          <div
            id="image"
            className="bg-[url('/images/bg-pattern-desktop.svg')] bg-[position:-562px_-294px] bg-no-repeat"
          >
            <div className="bg-no-repeat bg-[url('/images/illustration-woman-online-desktop.svg')] bg-[position:-84px_71px] h-full w-full">
              <div className="bg-no-repeat bg-[url('/images/illustration-box-desktop.svg')] h-full w-full relative right-[92px] top-[204px]"></div>
            </div>
          </div>
          <div id="FAQ" className="grid grid-cols-6 py-16 gap-4">
            <div className="col-span-5">
              <>
                <div
                  id="title"
                  className="text-black font-bold text-[32px] mb-9"
                >
                  FAQ
                </div>
                {Titles.map((title, i) => (
                  <FAQItem
                    title={title.title}
                    script={title.script}
                    key={i}
                    SelectId={setSelectId}
                    id={i}
                    check={selectId == i}
                  />
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
