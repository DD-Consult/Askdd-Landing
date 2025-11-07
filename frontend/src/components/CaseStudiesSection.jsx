import React from 'react';
import { TrendingUp, Clock, Users } from 'lucide-react';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: Users,
      industry: 'SaaS Startup',
      company: 'TechFlow Solutions',
      problem: 'Losing 60% of leads due to slow response times outside business hours',
      solution: 'Deployed Ask DD to handle initial inquiries 24/7 and qualify leads automatically',
      results: [
        { metric: '3x', label: 'More Qualified Leads' },
        { metric: '87%', label: 'Lead Response Rate' },
        { metric: '24/7', label: 'Availability' }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      industry: 'Real Estate Agency',
      company: 'Prime Properties Group',
      problem: 'Sales team overwhelmed with repetitive property inquiries, missing opportunities',
      solution: 'Ask DD handles property details, schedules viewings, and pre-qualifies buyers',
      results: [
        { metric: '60%', label: 'Time Saved' },
        { metric: '45%', label: 'More Showings' },
        { metric: '2.5x', label: 'Faster Response' }
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      industry: 'E-commerce',
      company: 'GreenLife Wellness',
      problem: 'High cart abandonment due to unanswered product questions during checkout',
      solution: 'Integrated Ask DD to provide instant product guidance and personalized recommendations',
      results: [
        { metric: '35%', label: 'Lower Cart Abandonment' },
        { metric: '4.8/5', label: 'Customer Satisfaction' },
        { metric: '28%', label: 'Revenue Increase' }
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            See how companies across industries are transforming their sales process with Ask DD
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                {/* Icon & Industry */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-4`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {study.industry}
                  </div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {study.company}
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-600 mb-2">The Challenge</h4>
                  <p className="text-sm text-[var(--text-muted)]">{study.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--primary-600)] mb-2">The Solution</h4>
                  <p className="text-sm text-[var(--text-muted)]">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-green-600 mb-4">The Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-[var(--primary-600)] mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] leading-tight">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-[var(--text-muted)] mb-4">
            Ready to write your own success story?
          </p>
        </div>
      </div>
    </section>
  );
};
