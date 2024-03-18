import Image from "next/image";
import {
  HeroCardTitle,
  HeroCardImages,
  List,
  ServiceBox,
} from "../../components/index";

export default function Page() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="text-center p-12">
        <HeroCardTitle
          heading="V책re tjenester"
          subtitle="Vi tilbyr blablabla.."
        />
        {/* Placeholder for artwork */}
        <div className="mx-auto w-48 h-48 mb-8">
          {/* Replace with your art */}
          <HeroCardImages heroImageOne="/path" />
        </div>
        <List
          listItemOne="Rekruttering"
          listItemTwo="Utleie av personell"
          listItemThree="R책dgivning"
          listItemFour="Headhunting"
        />
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Each Service */}
        <ServiceBox
          title="Rekruttering"
          description="Detailed description of Rekruttering service..."
          iconName="icon-path"
        />
        <ServiceBox
          title="Utleie av personell"
          description="Detailed description of Utleie av personell service..."
          iconName="icon-path"
        />
        <ServiceBox
          title="R책dgiving"
          description="Detailed description of R책dgiving service..."
          iconName="icon-path"
        />
        <ServiceBox
          title="Headhunting"
          description="Detailed description of Headhunting service..."
          iconName="icon-path"
        />
      </div>
    </div>
  );
}
