import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Frontend Development",
    text: [
      "Build responsive, intuitive user interfaces using React.js, Next.js, and modern CSS frameworks. Create pixel-perfect designs from Figma mockups with cross-browser compatibility and optimized performance.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Backend Development",
    text: [
      "Develop secure, scalable RESTful APIs and GraphQL endpoints. Design database schemas, optimize queries, and implement authentication mechanisms using OAuth2/JWT.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Full-Stack Development",
    text: [
      "End-to-end development from concept to deployment. Build complete web applications with seamless frontend-backend integration, ensuring optimal performance and user experience.",
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 4,
    name: "Cloud Services & DevOps",
    text: [
      "Deploy and manage applications on AWS (EC2, Lambda, S3, CloudWatch) and Vercel. Implement CI/CD pipelines, automate workflows, and ensure scalable, fault-tolerant services.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 5,
    name: "UI Component Libraries",
    text: [
      "Design and develop reusable React component libraries. Establish consistent design systems that reduce development time and maintain design language across projects.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 6,
    name: "Performance Optimization",
    text: [
      "Optimize application performance through code-splitting, lazy loading, and refactoring. Improve load times and reduce code duplication for better user experience.",
    ],
    image: "assets/img/news/1.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
