import { Inter, Barlow } from "next/font/google";

export const barlow = Barlow({
    weight: ['400', '500', '600', '700'],
    variable: '--font-barlow',
    subsets: ['latin'],
    display: 'swap'
})
   

export const inter = Inter({ 
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
  });
  