import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import SearchingStack from "./stack/SearchingStack";
import searchWordApi from "@/api/search/searchWordApi";
import Word from "@/types/words";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from "@/components/transaction/Loading";
import EasyTransaction from "@/components/transaction/EasyTransaction";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function SearchingPage() {
  const [openSearchStack, setOpenSearchStack] = useState(false);

  const [wordText, setWordText] = useState("");
  const [word, setWord] = useState<Word | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchWord = async (textSearch: string) => {
    setIsLoading(true);
    setWord(null);
    setWordText(textSearch);
    setOpenSearchStack(false);

    try {
      const wordSearchResp = await searchWordApi(textSearch || "");
      if (wordSearchResp.isSuccess) {
        if (wordSearchResp.data) {
          setWord(wordSearchResp.data);
        } else {
          // showInfoNotification("Word not found");
          setWord(null);
        }
      } else {
        // if (wordSearchResp.error === NetworkError) {
        //   setHasNetworkError(true);
        // }
        // handleShowErrorsNotification(wordSearchResp);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      <SearchingStack
        open={openSearchStack}
        onClose={() => setOpenSearchStack(false)}
        onSearch={onSearchWord}
      />
      {/* <div> */}

      {/* </div> */}

      <EasyTransaction show={!openSearchStack}>
        <>
          <div className="px-3 pb-2 pt-4">
            <div className="flex">
              <h3 className="text-xl font-bold">Tìm kiếm</h3>
            </div>
          </div>
          <div className="shadow-xs sticky top-0 z-10 bg-white pb-5 pt-3">
            <div className="px-2">
              <button
                className="w-full"
                onClick={() => {
                  setOpenSearchStack(!openSearchStack);
                }}
              >
                <div className="mx-auto flex max-w-md items-center overflow-hidden rounded-md border-2 border-blue-900 px-2.5 py-2.5">
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
          <div>
            {isLoading && (
              <EasyTransaction show={isLoading}>
                <Loading />
              </EasyTransaction>
            )}

            <EasyTransaction show={!isLoading}>
              <section className="bg-white">
                {word && word.imageUrls && (
                  // <div className="w-full bg-black">
                  <Carousel
                    responsive={responsive}
                    arrows={false}
                    autoPlay={true}
                    // showDots={true}
                    rewind={true}
                  >
                    {word.imageUrls.map((url, index) => (
                      <img
                        key={index}
                        className="aspect-[5/3] object-contain"
                        src={url}
                        alt={word.eng}
                      />
                    ))}

                    {/* <img
              className="aspect-[4/3] object-contain"
              src={word.imageUrls[0]}
              alt={word.eng}
            /> */}
                  </Carousel>
                  // </div>
                )}
              </section>
              {/* {JSON.stringify(word)} */}
            </EasyTransaction>
          </div>
        </>
      </EasyTransaction>
    </div>
  );
}
