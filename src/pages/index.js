import Image from "next/image";
import Layout from "@/components/Layout";
import FlatsService from "@/services/flat";

export default function Home({ payload, meta }) {
  console.log({ payload, meta });
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto  ">
          <p>FlatRent App</p>
          {payload?.map((el) => (
            <div
              key={el?.id}
              className="flex px-4 py-2 bg-gray-100 mb-4 items-center cursor-pointer"
            >
              <div className="bg-gray-100 relative h-40 w-60 overflow-hidden  ">
                <Image
                  src={el?.pictures[0]}
                  alt="Zdjęcie lokalu"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-all"
                />
              </div>
              <div className="p-4 pl-6 w-3/5">
                <p className="font-bold text-gray-800 text-2xl">{el?.name}</p>
                <div className="flex justify-between">
                  <p className="text-gray-800 text-base mt-2">
                    {[el?.city, el?.voivodeship, el?.street]
                      .filter((el) => el)
                      .join(", ")}
                  </p>
                </div>
                <p className="font-semibold text-blue-600 uppercase text-2xl mt-6">
                  {el?.price} PLN
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-gray-600 text-base">
                  Powierzchnia: {el?.area}
                </p>
                <p className="text-gray-600 text-base">
                  Ilość pokoi: {el?.rooms}
                </p>
                <p className="text-gray-600 text-base">Piętro: {el?.floor}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await FlatsService.getFlats();

  if (res?.status !== 200 || !res?.data?.payload)
    return {
      props: { payload: [] },
    };

  return {
    props: { payload: res?.data?.payload, meta: res?.data?.meta },
  };
}
