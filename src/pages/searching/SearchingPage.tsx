import { LuSearch } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";
import StackLayout from "@/components/stack/StackLayout";
import { useEffect, useState } from "react";
import quickSearchWords from "@/api/search/quickSearchWords";

export default function SearchingPage() {
  const [openSearchStack, setOpenSearchStack] = useState(false);

  useEffect(() => {
    async function search() {
      try {
        const resp = await quickSearchWords('hel')
        console.log(resp)
      } catch(error) {
        console.log(error)
      }
    }

    search()
  }, [])

  return (
    <div>
      {/* <div> */}
      <div className="px-3 pb-2 pt-4">
        <div className="flex">
          <h3 className="text-xl font-bold">Tìm kiếm</h3>
        </div>
      </div>
      <div className="shadow-xs sticky top-0 bg-white pb-5 pt-3">
        <div className="px-2">
          <button
            className="w-full"
            onClick={() => {
              setOpenSearchStack(!openSearchStack);
            }}
          >
            <div className="mx-auto flex max-w-md items-center overflow-hidden rounded-md border-2 border-blue-700 px-2.5 py-2.5">
              <LuSearch className="h-7 w-7 text-blue-900" />
              <div className="px-2">
                <span className="text-md font-medium text-gray-400">
                  Bạn muốn tra gì
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* </div> */}
      <StackLayout show={openSearchStack}>
        <div className="flex h-14 w-full items-center gap-2 bg-gray-200">
          <div className="px-2">
            <button
              onClick={() => setOpenSearchStack(false)}
              type="button"
              title="back"
            >
              <IoArrowBackOutline className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="w-full">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tìm kiếm"
              className="peer block w-full bg-gray-200 pb-2 pr-5 pt-1.5 font-medium text-gray-700 placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
            />
          </div>
        </div>
      </StackLayout>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque enim vitae
      nisi consequuntur ea aliquam voluptas quam necessitatibus? Architecto ex
      beatae ipsa similique, iusto rem ipsam nemo perferendis dolor delectus.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla
      numquam quis cum enim libero culpa fuga ex perspiciatis praesentium
      deleniti neque quisquam modi sapiente, odio possimus, eaque, excepturi
      quae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque enim
      vitae nisi consequuntur ea aliquam voluptas quam necessitatibus?
      Architecto ex beatae ipsa similique, iusto rem ipsam nemo perferendis
      dolor delectus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Molestiae nulla numquam quis cum enim libero culpa fuga ex perspiciatis
      praesentium deleniti neque quisquam modi sapiente, odio possimus, eaque,
      excepturi quae?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Eaque enim vitae nisi consequuntur ea aliquam voluptas quam
      necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam nemo
      perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Eaque enim vitae nisi consequuntur ea aliquam voluptas
      quam necessitatibus? Architecto ex beatae ipsa similique, iusto rem ipsam
      nemo perferendis dolor delectus. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae nulla numquam quis cum enim libero culpa fuga
      ex perspiciatis praesentium deleniti neque quisquam modi sapiente, odio
      possimus, eaque, excepturi quae?
    </div>
  );
}
