import images from "../assets/dashboard.jpg";
import "./dashboard.css";
import business from "../assets/landing-page-images/business-vector.png";
import writing from "../assets/landing-page-images/writing-vector.png";
import storage from "../assets/landing-page-images/storage-vector.png";
import webdev from "../assets/landing-page-images/web-development-vector.png";
import design from "../assets/landing-page-images/design-vector.png";
import graph from "../assets/graph-diagram-animation.gif";

const Coursewidget = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text, image } = props;
  return (
    <div className="w-[300px] mx-auto shadow-md px-5 py-2 mt-4 rounded-lg border-2 hover:translate-x-1 transition-y-1  cursor-pointer">
      <div className="flex gap-x-8 justify-start items-center text-left  ">
        <img src={image} className="h-8 w-8 object-cover" />
        <h2 className="text-blue-800">{text}</h2>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return (
    <section className=" w-full ">
      <div className="w-full">
        <p className="capitalize">good morning mr temitope</p>
        <div className="w-full">
          <img src={images} className="mx-auto h-[500px]" />
        </div>

        <div className="mt-8 lg:w-[90%] mx-auto flex justify-between gap-x-20 items-center flex-col lg:flex-row">
          <div className=" w-full lg:w-1/4 ">
            <div className="flex gap-x-14">
              <p className="dashboard-content-header font-bold  text-blue-900">
                Popular Courses
              </p>
              <p className="dashboard-content-sub-header text-red-400">
                All courses
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <Coursewidget text="business marketing" image={business} />
              <Coursewidget text="UI/UX design" image={design} />
              <Coursewidget text="Content writing" image={writing} />
              <Coursewidget text="web development" image={webdev} />
              <Coursewidget text="cloud storage" image={storage} />
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mt-0">
            <div className="flex flex-col gap-y-6">
              <h3 className="text-3xl font-semibold text-center text-blue-900 capitalize">
                current Activities
              </h3>
              <div className=" mx-auto">
                <img src={graph} alt="graph gif" className="h-[150px]" />
              </div>

              <div className="flex justify-center items-center gap-x-6 ">
                <div className="flex-col w-32 h-20 flex items-center justify-center font-semibold text-white  bg-[#4B5FDC] rounded-2xl">
                  <span className="text-3xl">40+</span>
                  <p className="text-sm capitalize">available courses</p>
                </div>
                <div className="flex-col w-32 h-20 flex items-center justify-center font-semibold text-white bg-[#4B5FDC] rounded-2xl">
                  <span className="text-3xl">40+</span>
                  <p className="text-sm capitalize">available videos</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/4 mt-8 lg:mt-0">
            <div className="flex gap-x-14">
              <p className="dashboard-content-header text-blue-900 font-bold">
                Best Instructors
              </p>
              <p className="dashboard-content-sub-header text-red-400">
                See more
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <Coursewidget text="business marketing" image={business} />
              <Coursewidget text="UI/UX design" image={design} />
              <Coursewidget text="Content writing" image={writing} />
              <Coursewidget text="web development" image={webdev} />
              <Coursewidget text="cloud storage" image={storage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
