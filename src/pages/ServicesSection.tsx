import SectionTitle from "../components/sectionTitle";
import ServiceCard from "../components/Services/Service";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";
import { useState } from "react";
import ServiceModal from "../components/Services/ServiceModal";
const ServicesSection = () => {
  const [serviceModal, setServiceModal] = useState(false);

  const handleViewMore = () => {
    setServiceModal(true);
  };

  const handleCloseModal = () => {
    setServiceModal(false);
  };

  return (
    <section className="services" id="services">
      <SectionTitle title="Services" subtitle="What I offer" />

      <div className="services-container">
        {serviceModal && (
          <ServiceModal
            title={"frontend developer"}
            jobsList={["frontend", "ui designer", "quotas"]}
            hadleCloseModal={handleCloseModal}
          />
        )}
        <div className="services-cards">
          <ServiceCard
            title="Frontend Developer"
            icon={<UilAngleDoubleRight />}
            handler={handleViewMore}
          />
          <ServiceCard
            title="Backend Developer"
            icon={<UilAngleDoubleRight />}
            handler={handleViewMore}
          />
          <ServiceCard
            title="FullStack Developer"
            icon={<UilAngleDoubleRight />}
            handler={handleViewMore}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
