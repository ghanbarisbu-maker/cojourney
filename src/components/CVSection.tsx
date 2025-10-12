import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

interface CVItem {
  title: string;
  items: string[];
}

interface CVSectionProps {
  cvData: CVItem[];
  pdfUrl?: string;
}

const CVSection: React.FC<CVSectionProps> = ({ cvData, pdfUrl }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900 font-serif">Professional Background (CV)</h2>
        {pdfUrl && (
          <a
            href={pdfUrl}
            download
            className="flex items-center bg-warm-apricot text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Full CV
          </a>
        )}
      </div>

      <div className="space-y-3">
        {cvData.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              <ChevronDown
                className={`w-5 h-5 text-deep-teal transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-5 pb-5 border-t border-gray-100">
                <ul className="space-y-3 pt-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-deep-teal rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVSection;
