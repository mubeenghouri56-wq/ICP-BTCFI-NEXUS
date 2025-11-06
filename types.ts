import type { ReactNode } from 'react';

export interface Feature {
  // Fix: Use imported ReactNode type directly.
  icon: ReactNode;
  title: string;
  description: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}
