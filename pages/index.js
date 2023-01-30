import Head from "next/head";
import PrimaryButtonElegant from "../components/button/elegant/PrimaryButton";
import PrimaryButtonLoadingElegant from "../components/button/elegant/PrimaryButtonLoading";
import SecondaryButtonElegant from "../components/button/elegant/SecondaryButton";
import SecondaryButtonLoadingElegant from "../components/button/elegant/SecondaryButtonLoading";
import CardComponent from "../components/CardComponent";

export default function Home() {
    return (
        <>
            {/* (this is how you add custom fonts in next) */}
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                {/* To add any other fonts, paste them below: */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="bg-white min-h-screen">
                <main className="w-full flex items-center justify-center flex-col p-10">
                    <h1 className="font-display w-full text-center text-4xl font-bold pb-8 border-b border-gray-100">
                        Component Library Testing
                    </h1>

                    <div className="w-full min-h-screen dotted-grid py-10">
                        <div className="space-y-2">
                            {/* <CardComponent /> */}
                            <PrimaryButtonElegant />
                            <PrimaryButtonLoadingElegant />
                            <SecondaryButtonElegant />
                            <SecondaryButtonLoadingElegant />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
