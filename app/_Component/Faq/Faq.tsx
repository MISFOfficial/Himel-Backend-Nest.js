"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What software and tools do you use for animations?",
    answer:
      "I primarily use Blender for 3D modeling, texturing, lighting, and animation, and After Effects for post-processing, compositing, visual effects, and 2D motion graphics. I also use Premiere Pro for video editing and color grading.",
  },
  {
    question: "How do you handle project revisions and feedback?",
    answer:
      "I follow a structured workflow: storyboarding/concept development first, followed by rough pre-visualizations (low-res animatics), and finally high-resolution rendering and editing. This allows you to give feedback at key stages before final rendering.",
  },
  {
    question: "What is your typical turnaround time for an animation?",
    answer:
      "A standard 3D product promo or a 30-second motion graphic video typically takes 1 to 2 weeks depending on the complexity of the assets and the detail of the animations.",
  },
  {
    question: "Do you help with script writing and storyboarding?",
    answer:
      "Yes! I assist with the complete creative process: from scripting and style frame generation to storyboarding and final production, ensuring the visual pacing aligns perfectly with your brand message.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="">
      {/* Header */}
      <div className="text-center space-y-4 mb-5">
        <h4 className="primary-text2 font-bold uppercase tracking-widest text-sm">
          Hire Me
        </h4>
        <h2 className="text-xl md:text-4xl font-black text-zinc-950">
          Why Hire Me?
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
          With deep expertise in 3D modeling, motion graphics, and video production, I create visually stunning assets that engage audiences and elevate brand messaging.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Graphic - Left Side */}
        <div className="lg:col-span-4 relative hidden lg:flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Main dark bubble shape */}
            <div className="absolute inset-0 primary-color rounded-full rounded-bl-none transform rotate-[-10deg] flex items-center justify-center">
              <span className="text-white text-[200px] font-black leading-none opacity-50 select-none">
                ?
              </span>
            </div>
            {/* Floating red bubble with question mark */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 primary-color2 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">?</span>
            </div>
          </div>
        </div>

        {/* Accordion - Right Side */}
        <div className="lg:col-span-8 space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer primary-rounded overflow-hidden border primary-border bg-white hover:bg-zinc-50 transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center cursor-pointer justify-between p-6 text-left group"
              >
                <span
                  className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? "text-primary-color2" : "text-zinc-800 group-hover:text-zinc-950"}`}
                >
                  {item.question}
                </span>
                <div className="text-zinc-400 group-hover:text-zinc-950 transition-colors">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-zinc-500 leading-relaxed mt-2 font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
