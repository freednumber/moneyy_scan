
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const GroceriesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l.383-1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 002.868 3H2.25m5.25 9h11.218" />
  </svg>
);

export const DiningIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.369-2.23 8.287 8.287 0 003-2.152zm-1.036 6.354a8.257 8.257 0 00-3.369-2.23 8.287 8.287 0 00-3 2.152 8.25 8.25 0 019 9.6a8.983 8.983 0 00-3.369-2.23z" />
    </svg>
);

export const TransportIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 003.375-3.375h9.75a3.375 3.375 0 003.375 3.375v1.875" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6l-3.75 3.75-3.75-3.75" />
  </svg>
);

export const ShoppingIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const UtilitiesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </svg>
);

export const EntertainmentIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const OtherIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.008 1.11-1.212.55-.204 1.18-.145 1.676.153l.497.303c.51.312 1.15.312 1.66 0l.497-.303c.496-.298 1.126-.357 1.676-.153.55.204 1.02.67 1.11 1.212l.092.542-.092.542c-.09.542-.56 1.008-1.11 1.212-.55.204-1.18.145-1.676-.153l-.497-.303c-.51-.312-1.15-.312-1.66 0l-.497.303c-.496.298-1.126.357-1.676-.153-.55-.204-1.02-.67-1.11-1.212L9.5 4.482l.094-.542zM9.594 10.94c.09-.542.56-1.008 1.11-1.212.55-.204 1.18-.145 1.676.153l.497.303c.51.312 1.15.312 1.66 0l.497-.303c.496-.298 1.126-.357 1.676-.153.55.204 1.02.67 1.11 1.212l.092.542-.092.542c-.09.542-.56 1.008-1.11 1.212-.55.204-1.18.145-1.676-.153l-.497-.303c-.51-.312-1.15-.312-1.66 0l-.497.303c-.496.298-1.126.357-1.676-.153-.55-.204-1.02-.67-1.11-1.212L9.5 11.482l.094-.542zM9.594 17.94c.09-.542.56-1.008 1.11-1.212.55-.204 1.18-.145 1.676.153l.497.303c.51.312 1.15.312 1.66 0l.497-.303c.496-.298 1.126-.357 1.676-.153.55.204 1.02.67 1.11 1.212l.092.542-.092.542c-.09.542-.56 1.008-1.11 1.212-.55.204-1.18.145-1.676-.153l-.497-.303c-.51-.312-1.15-.312-1.66 0l-.497.303c-.496.298-1.126.357-1.676-.153-.55-.204-1.02-.67-1.11-1.212L9.5 18.482l.094-.542z" />
    </svg>
);

export const UploadIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z" />
  </svg>
);

export const SpinnerIcon: React.FC<IconProps> = (props) => (
  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);
