export function NavBar() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex justify-between px-6 py-4 ">
          <div className="flex gap-x-10">
            <a className="font-bold">Thyroid Cancer Prediction</a>
            <a href="" className="font-thin">
              Machine Learning in Health
            </a>
            <a href="" className="font-thin">
              Better Living
            </a>
            <a href="" className="font-thin">
              Medical Professionals
            </a>
          </div>
          <div>
            <div className="flex gap-x-2">
              <input
                type="text"
                placeholder="Search symptoms..."
                className="border-2 rounded-lg placeholder:text-slate-400 focus:outline-none py-1 px-3 text-sm"
              />
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-200"></div>
      </div>
    </>
  );
}
