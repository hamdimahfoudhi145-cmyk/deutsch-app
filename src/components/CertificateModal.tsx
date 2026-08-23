import React, { useState } from "react";
import { Award, CheckCircle2, Download, X, Share2, Sparkles } from "lucide-react";
import { LevelTest } from "../types";

interface CertificateModalProps {
  test: LevelTest;
  score: number;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  test,
  score,
  onClose,
}) => {
  const [userName, setUserName] = useState<string>("طالب اللغة الألمانية");
  const dateStr = new Date().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#161616] border border-white/10 rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl space-y-5 text-right relative my-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">مبروك! لقد اجتزت الاختبار بنجاح</h2>
            <p className="text-xs text-white/50">شهادة إتمام المستوى المعتمدة</p>
          </div>
        </div>

        {/* Name input */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-white/70">
            الاسم الذي ترغب بإظهاره على الشهادة:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Certificate Card Preview */}
        <div className="border-2 border-emerald-500/40 rounded-2xl p-6 bg-[#0E0E0E] text-center space-y-4 shadow-inner relative overflow-hidden">
          {/* Subtle flag accent */}
          <div className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-white/20 via-red-500/60 to-amber-500/60 mb-2" />

          <div className="text-[11px] uppercase font-bold tracking-widest text-emerald-400">
            ZERTIFIKAT DEUTSCH • شهادة إتقان اللغة الألمانية
          </div>

          <div className="text-xl sm:text-2xl font-bold text-white">
            {test.titleGerman}
          </div>

          <p className="text-xs text-white/60">
            تشهد منصة <strong>Deutsch Lernen 🇩🇪</strong> بأن المتعلم:
          </p>

          <div className="text-lg sm:text-xl font-bold text-emerald-300 border-b border-emerald-500/30 pb-2 inline-block px-8">
            {userName || "طالب اللغة الألمانية"}
          </div>

          <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed">
            قد أتم بنجاح كافة متطلبات ومعايير المستوى <strong>{test.level}</strong> وحصل على درجة:
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>النتيجة: {score}% (ناجح مع مرتبة الشرف)</span>
          </div>

          <div className="flex items-center justify-between text-[10px] text-white/40 pt-4 border-t border-white/5">
            <span>التاريخ: {dateStr}</span>
            <span>الرقم المرجعي: DL-{test.level}-{Date.now().toString().slice(-6)}</span>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={() => window.print()}
          className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
        >
          <Download className="w-4 h-4" />
          <span>طباعة أو حفظ الشهادة (PDF)</span>
        </button>
      </div>
    </div>
  );
};
