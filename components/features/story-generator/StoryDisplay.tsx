

import React from 'react';
import { StoryDisplayProps } from '../../../types/index';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';

export const StoryDisplay: React.FC<StoryDisplayProps> = ({ story, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorMessage message={error} />;
    }
    if (story) {
      return (
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-slate-100 whitespace-pre-wrap">
           {story}
        </div>
      );
    }
    return (
      <div className="text-center text-slate-500">
        <p>Your generated story will appear here.</p>
        <p>Enter a prompt above and let the magic begin!</p>
      </div>
    );
  };

  return (
    <section className="bg-slate-800/50 rounded-lg p-6 sm:p-8 shadow-lg border border-slate-700 flex-1 min-h-[300px] flex justify-center items-center">
      <div className="w-full h-full transition-opacity duration-500">
        {renderContent()}
      </div>
    </section>
  );
};