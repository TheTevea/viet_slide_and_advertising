

export type SlideStatus = 'active' | 'inactive';
export type SlideCategory = 'mobile-slideshow' | 'mobile-advertising' | 'website-slideshow' | 'website-advertising';

export interface Slide {
  id: string;
  title: string;
  image: string; // base64 string
  order: number;
  status: SlideStatus;
  lastUpdatedBy: string;
  updatedAt: string;
  category: SlideCategory;
}

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export interface StoryInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export interface StoryDisplayProps {
  story: string;
  isLoading: boolean;
  error: string | null;
}

export interface ErrorMessageProps {
  message: string;
}
