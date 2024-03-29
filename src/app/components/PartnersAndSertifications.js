import Image from "next/image";
import dnv from "../imagesMidlertidig/partners/dnv.png";
import ebber from "../imagesMidlertidig/partners/ebber.png";
import epicjqs from "../imagesMidlertidig/partners/epic-jqs.png";
import jobbkretser from "../imagesMidlertidig/partners/jobbkretser.png";
import reviderbeidsgiver from "../imagesMidlertidig/partners/revidert-arbeidsgiver.png";
import startbank from "../imagesMidlertidig/partners/startbank.png";
import nho from "../imagesMidlertidig/partners/nho.png";

const partners = [
  {
    name: "Dnv",
    logo: dnv,
  
  },
  {
    name: "ebber",
    logo: ebber,

  },
  {
    name: "epicjqs",
    logo: epicjqs,
 
  },
  {
    name: "jobbkretser",
    logo: jobbkretser,
    
  },
  {
    name: "reviderbeidsgiver",
    logo: reviderbeidsgiver,
   
  },
  {
    name: "startbank",
    logo: startbank,
 
  },
  {
    name: "nho",
    logo: nho,
  },
];

export default function PartnersAndSertifications() {
  return (
    <div
      style={{
        height: "40vh",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="w-3/5 mx-auto">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-card-text-color mb-12">
            Samarbeidspartnere & sertifiseringer
          </h2>
          <div className="flex justify-center space-x-4 align-middle">
            {partners.map((partner) => (
              <div
                key={partner.name}
                style={{ height: "150px", width: "150px" }}
                className="bg-partner-box shadow-lg  align-middle p-4  rounded-connie w-1/4 flex items-center justify-center"
              >
                <Image
                  className="aspect-square object-contain"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
