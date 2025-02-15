import { SocialIcon } from "react-social-icons";

export function Footer() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex justify-between px-6 py-12">
          <div className="flex flex-col gap-y-2 text-gray-500">
            <h1 className="text-xl font-bold text-black">Operations</h1>
            <a href="">Find A Doctor</a>
            <a href="">Location & Directions</a>
            <a href="">Patients & Visitors</a>
            <a href="">Health Library</a>
            <a href="">Institutes & Departments</a>
            <a href="">Appointments</a>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-500">
            <h1 className="text-xl font-bold text-black">Blog, News & Apps</h1>
            <a href="">Resources for Medical Professionals</a>
            <a href="">Patient Experiece</a>
            <a href="">Research & Innovations</a>
          </div>
          <div className="flex gap-x-2">
            <SocialIcon url="www.vimeo.com" />

            <SocialIcon url="www.meetup.com" />

            <SocialIcon url="www.pinterest.com" />
          </div>
        </div>
        <div className="mt-2 border-t border-gray-200"></div>
        <div className="flex justify-center p-6">
          Some random address that I've added | © 2025 Thyroid Cancer Clinic.
          All Rights Reserved.
        </div>
      </div>
    </>
  );
}
