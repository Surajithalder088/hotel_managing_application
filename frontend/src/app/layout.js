"use client"
import Navbar from "./{component}/Navbar/page";

import { Provider } from "react-redux";
import { store } from "@/lib/store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
       
      >
        <Provider store={store}>
        {children}
        </Provider>
      
      </body>
    </html>
  );
}
