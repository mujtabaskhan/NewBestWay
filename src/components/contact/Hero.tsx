import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="w-full bg-white pb-[87px] max-xl:pb-40 max-lg:pb-28 max-md:pb-20 max-sm:!pb-[111px]"
            style={{ width: "100%" }}
        >
            <div className="relative z-10 flex flex-col h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-lg:!pt-0 max-sm:mt-0 max-sm:!pt-3">
                <div className="mb-12">
                    <nav className="text-[#027C99] text-xs font-flex max-sm:text-xs">
                        <Link href="/" className="font-normal">
                            Home
                        </Link>
                        <span className="font-black mx-5">&gt;</span>
                        <span className="font-normal">Contact</span>
                    </nav>
                </div>

                <div>
                    <h1 className="text-[70px] max-md:text-[40px] max-sm:text-[30px] leading-[70px] text-[#027C99] mb-10 max-xl:mb-3 max-sm:leading-[50px] font-normal">
                        Lets
                        <span className="font-bold font-italic"> Talk</span>
                    </h1>

                    <div className="max-w-4xl">
                        <p className="text-xl text-[#027C99] leading-[30px] font-flex max-sm:leading-6 max-sm:!text-xs">
                            Have questions or need expert financial guidance? Our team is here to help you every step of the way.
                            Reach out to us today and let&apos;s discuss how we can support your business with reliable and professional solutions.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
