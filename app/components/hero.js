import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          <div className="flex flex-col text-center lg:text-left">
            <div className="mx-auto lg:mx-0 mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              What's new in v2.0
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl md:text-6xl leading-tight">
              Ship your next project <br className="hidden md:inline" />
              <span className="bg-gradient-to-r border-none bg-clip-text text-transparent from-blue-600 to-indigo-600">
                10x faster
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Beautifully designed components built with Next.js and Tailwind CSS. Save weeks of development and launch your landing page today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/signup"
                className="rounded-xl bg-gray-900 px-6 py-3.5 text-base font-medium text-white hover:bg-gray-800 shadow-sm transition-all text-center"
              >
                Get Started Free
              </Link>
              <Link
                href="/docs"
                className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all text-center flex items-center justify-center gap-2"
              >
                Documentation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-70 blur-lg"></div>
            
            <div className="relative aspect-video w-full rounded-2xl border border-gray-200 bg-gray-50 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-sm font-medium text-gray-400">Dashboard Preview Mockup</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
