"use client"

import Script from "next/script";


const LiveChat = () => {
  return (
    <>
        {/* Livechat Script */}
      <Script
        id=""
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/669ee2b632dca6db2cb3b01c/1i3eab6al';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `,
        }}
      />
        {/*Livechat script End  */}
    </>
  )
}

export default LiveChat