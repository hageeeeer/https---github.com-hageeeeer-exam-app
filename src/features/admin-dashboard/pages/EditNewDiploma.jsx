import { Button } from "@heroui/react";


export default function EditNewDiploma() {
  return (
    <div>
      <p className="text-[14px] text-custom-gray-400 py-4 px-2">
        Diplomas / <span className="text-blue-600">Edit New Diploma</span>{" "}
      </p>

      <div className="flex justify-end  items-center  sm:gap-0 gap-2 px-4 py-2 border-2 border-gray-100">
        <div className="flex gap-3">
          <Button className="rounded-none text-[14px] bg-gray-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <span>Cancel</span>
          </Button>
          <Button className="rounded-none text-[14px] bg-emerald-500 text-white">
            <span>Save</span>
          </Button>
        </div>
      </div>

      <section className="px-4 py-8 bg-gray-100">
        <form>
          <h5>Image</h5>
          <div className="flex-1 items-center  mx-auto my-3 space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
              <div className="items-center justify-center  mx-auto">
                <label
                  className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                  id="drop"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline ml-1">
                        browse
                      </span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    className="hidden"
                    accept="image/png,image/jpeg"
                    id="input"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* title */}

          <h5>TiTle</h5>
          <div className="my-3 bg-white">
          <input type="text" className="border-2 border-gray-200 py-4 px-2 w-full"  />
          </div>
          {/* description */}

          <h5>Description</h5>
          <div className="my-3 bg-white">
          <textarea type="text" className="border-2 border-gray-200 py-4 px-2 w-full"  >
            
          </textarea>
          </div>
        </form>
      </section>
    </div>
  );
}
