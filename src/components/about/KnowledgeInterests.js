const knowledge = [
  { id: 1, text: "React.js, Next.js, Node.js, jQuery" },
  {
    id: 2,
    text: "Tailwind CSS, Bootstrap, AntDesign, ShadcnUI, NextUI, DaisyUI",
  },
  { id: 3, text: "MongoDB, PostgreSQL, Supabase" },
  { id: 4, text: "RESTful APIs, OAuth2/JWT, Clerk" },
  { id: 5, text: "AWS (Lambda, EC2, S3, CloudWatch), Vercel" },
  { id: 6, text: "Git, GitHub, Jest, Jira, ClickUp" },
  { id: 7, text: "HubSpot, Shopify, WordPress" },
];
const interests = [
  { id: 1, text: "Building Responsive Web Applications" },
  { id: 2, text: "Optimizing UI Performance" },
  { id: 3, text: "Developing Secure RESTful APIs" },
  { id: 4, text: "Full-Stack Development" },
  { id: 5, text: "Agile Development & DevOps Practices" },
];

const KnowledgeInterests = () => {
  return (
    <div className="tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Knowledge</h3>
            </div>
            <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {knowledge.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span>
                      <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Interests</h3>
            </div>
            <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {interests.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span>
                      <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KnowledgeInterests;
