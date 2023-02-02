import ProjectsDetailsCard from "./Components/ProjectsDetailsCard";
import "./HomePage.scss";
import { SiMessenger } from "react-icons/si";
import MessageBox from "./Components/MessageBox";

export default function HomePage() {
  return (
    <div>
      <div className='home-page flex items-center justify-center'>
        <div className="text-white -mt-20">
          <p className="text-5xl font-bold text-center mb-2">We share same <span className="text-blue-500">Goal</span></p>
          <p className="text-xl font-semibold text-center">
            <span className="text-blue-500">Success</span> is our <span className="text-blue-500">Mission</span>
          </p>
        </div>
      </div>

      <div className="my-7">
        <p className="text-5xl font-bold text-center">Project Name (Current Projects)</p>
        <div className="flex flex-row flex-wrap justify-between">
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
        </div>
      </div>
    </div>
  )
}
