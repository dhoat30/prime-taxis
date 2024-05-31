import ThankYouPage from "@/components/Pages/ThankYouPage/ThankYouPage";

export const metadata = {
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: false,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default async function Page() {

    return (
        <>
            <main>
                <ThankYouPage />
            </main>
        </>

    )
}
