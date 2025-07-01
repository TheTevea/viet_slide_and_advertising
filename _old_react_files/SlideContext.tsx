import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Slide, SlideCategory, Notification } from '../types';
import { initialSlides } from '../data/mockData';

interface SlideContextType {
  slides: Slide[];
  getSlidesByCategory: (category: SlideCategory) => Slide[];
  addSlide: (slide: Omit<Slide, 'id' | 'updatedAt' | 'lastUpdatedBy'>) => void;
  updateSlide: (slide: Slide) => void;
  deleteSlide: (id: string) => void;
  notifications: Notification[];
  addNotification: (message: string, type: 'success' | 'error') => void;
  removeNotification: (id: number) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider = ({ children }: { children: ReactNode }) => {
  const [slides, setSlides] = useState<Slide[]>(() => {
    try {
      const localData = localStorage.getItem('slides');
      return localData ? JSON.parse(localData) : initialSlides;
    } catch (error) {
      console.error("Could not parse slides from localStorage", error);
      return initialSlides;
    }
  });

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    localStorage.setItem('slides', JSON.stringify(slides));
  }, [slides]);

  const getSlidesByCategory = (category: SlideCategory) => {
    return slides.filter(slide => slide.category === category).sort((a, b) => a.order - b.order);
  };

  const addSlide = (slideData: Omit<Slide, 'id' | 'updatedAt' | 'lastUpdatedBy'>) => {
    const newSlide: Slide = {
      ...slideData,
      id: new Date().getTime().toString(),
      updatedAt: new Date().toISOString(),
      lastUpdatedBy: 'Moni Roy', // As per spec
    };
    setSlides(prevSlides => [...prevSlides, newSlide]);
    addNotification('Slide added successfully!', 'success');
  };
  
  const updateSlide = (updatedSlide: Slide) => {
    setSlides(prevSlides =>
      prevSlides.map(slide =>
        slide.id === updatedSlide.id ? { ...updatedSlide, updatedAt: new Date().toISOString(), lastUpdatedBy: 'Moni Roy' } : slide
      )
    );
    addNotification('Slide updated successfully!', 'success');
  };

  const deleteSlide = (id: string) => {
    setSlides(prevSlides => prevSlides.filter(slide => slide.id !== id));
    addNotification('Slide deleted successfully!', 'success');
  };
  
  const addNotification = (message: string, type: 'success' | 'error' = 'success') => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications(prev => [...prev, newNotification]);
    setTimeout(() => {
        removeNotification(newNotification.id);
    }, 5000);
  };

  const removeNotification = (id: number) => {
      setNotifications(prev => prev.filter(n => n.id !== id));
  };


  return (
    <SlideContext.Provider value={{ slides, getSlidesByCategory, addSlide, updateSlide, deleteSlide, notifications, addNotification, removeNotification }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlides = () => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error('useSlides must be used within a SlideProvider');
  }
  return context;
};
