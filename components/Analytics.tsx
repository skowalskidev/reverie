import Script from "next/script"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
    if (process.env.DEV) {
        return null;
    }

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
};
