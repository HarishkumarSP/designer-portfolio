import { Config } from '../../config';

const Resume = () => {
  return (
    <a href={Config.DESIGNER_RESUME_LINK} target="_blank">
      <button
        type="button"
        className="font-bold text-[#FFF] bg-[#FF686B] h-[40px] w-[150px] rounded-2xl hover:bg-[#fff] hover:text-[#FF686B] border-2 border-[#FF686B] transition duration-500"
      >
        My resume
      </button>
    </a>
  );
};

export default Resume;
