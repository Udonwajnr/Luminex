import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Luminex</h4>
            <p className="text-slate-500 leading-relaxed pr-4">
                There are many variations of passages of available but it is the majority of suffered that a alteration in that some dummy text.
            </p>
        </div>
        <div>
            <h4 className="font-bold text-slate-900 mb-4">About</h4>
            <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Our Legacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Collections</a></li>
                <li><a href="#" className="hover:text-blue-600">Investor Relations</a></li>
                <li><a href="#" className="hover:text-blue-600">Sustainability</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-slate-900 mb-4">Achievements</h4>
            <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Awards & Honors</a></li>
                <li><a href="#" className="hover:text-blue-600">Innovation Milestones</a></li>
                <li><a href="#" className="hover:text-blue-600">Global Presence</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Connect With Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Book a Test Drive</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
        Copyright © Luminex 2025. All rights reserved.
      </div>
    </footer>
  );
};