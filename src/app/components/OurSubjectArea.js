import Link from "next/link";

export default function OurSubjectArea({ subjectAreasTitle, subjectAreaCont1Title, subjectAreaCont1Items, subjectAreaCont2Title, subjectAreaCont2Items, subjectAreaFooterText }) {
  return (
    <div className="bg-slate-gray-flat pt-16 pb-8">
      <h1 className="text-center text-text-flat-inverted mb-8">
        {subjectAreasTitle}
      </h1>
      <div className="max-w-7xl w-full mx-auto md:p-8 p-4 flex flex-wrap slate-gray">
      <div className="lg:mr-0 mx-auto sm:w-auto w-full shadow-lg p-8 pr-16 mb-4 kf-border-light gray-background">
          <h2 className="pb-4 text-center w-full">
            {subjectAreaCont1Title}
          </h2>
          {subjectAreaCont1Items.map((item) => (
            <div key={item.index} className="py-2 flex items-center gap-2" style={{}}>
              <svg width="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="slate-gray-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <li className="md:text-header3 text-mobileHeader3 inline">
                <p>{item}</p>
              </li>
            </div>
          ))}
        </div>
        <div className="lg:w-10 md:h-4"></div>

        <div className="lg:ml-0 mx-auto sm:w-auto w-full shadow-lg p-8 pr-16 mb-4 kf-border-light gray-background">
          <h2 className="pb-4 text-center w-full">{subjectAreaCont2Title}</h2>
          {subjectAreaCont2Items.map((item) => (
            <div key={item.index} className="py-2 flex items-center gap-2" style={{}}>
              <svg width="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="slate-gray-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <li className="inline md:text-header3 text-mobileHeader3">
                <p>{item}</p>
              </li>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center light mb-8">
          {subjectAreaFooterText}
        </p>
        <div className="flex justify-center items-center">
          <Link href="/contact">
            <button className={`button light-background kf-border-dark dark`}>Kontakt oss</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
