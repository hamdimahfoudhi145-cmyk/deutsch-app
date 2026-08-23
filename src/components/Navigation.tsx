import React from "react";
import { Home, BookOpen, CheckSquare, BookMarked, Award } from "lucide-react";
import { TabType } from "../types";

interface NavigationProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  completedLessonsCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  completedLessonsCount,
}) => {
  const tabs = [
    { id: "home" as TabType, label: "الرئيسية", icon: Home },
    { id: "lessons" as TabType, label: "الدروس", icon: BookOpen, badge: completedLessonsCount > 0 ? `${completedLessonsCount}` : undefined },
    { id: "exercises" as TabType, label: "التمارين", icon: CheckSquare },
    { id: "reading" as TabType, label: "القراءة", icon: BookMarked },
    { id: "tests" as TabType, label: "الاختبارات", icon: Award },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#161616] border-t border-white/5 px-4 py-2 shadow-2xl backdrop-blur-lg safe-bottom">
      <div className="max-w-md mx-auto grid grid-cols-5 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`nav-tab-${tab.id}`}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all cursor-pointer relative ${
                isActive
                  ? "text-emerald-400 font-bold"
                  : "text-white/40 hover:text-white font-medium"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? "stroke-[2.5px] scale-110" : "stroke-2"}`} />
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 bg-emerald-500 text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#161616]">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1.5 tracking-tight leading-none truncate max-w-full font-medium">
                {tab.label}
              </span>
              {isActive && (
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
