import Layout from "@/components/Layout";
import FlatsService from "@/services/flat";
import { useMemo } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const FlatScreen = ({ payload }) => {
  const isLogged = false;
  const getInfo = useMemo(() => {
    if (!payload) return null;
    const dataInfo = [
      { label: "Powierzchnia", value: payload?.area, name: "area" },
      { label: "Pokoje", value: payload?.rooms, name: "rooms" },
      { label: "Piętro", value: payload?.floor, name: "floor" },
      { label: "Rok budowy", value: payload?.build_year, name: "build_year" },
    ];

    return dataInfo.filter((el) => el?.value);
  }, [payload]);

  return (
    <Layout title={`FlatRent - ${payload?.name}`}>
      <div className="grid grid-cols-[100%] md:grid-cols-[75%_25%]  pt-10 max-w-screen-xl px-5 mx-auto">
        <div className="ml-5 order-1">
          {payload?.name ? (
            <p className="font-bold text-gray-600 uppercase text-5xl">
              {payload?.name}
            </p>
          ) : null}
          {payload?.date ? (
            <p className="text-gray-600 text-xs mb-5 mt-2">
              Zaaktualizowane {payload?.modified_date}
            </p>
          ) : null}
        </div>
        <div className="pr-0 md:pr-8 order-3">
          {payload?.pictures?.length > 0 ? (
            <div className="h-[500px] mb-4">
              <Carousel dynamicHeight={false} showThumbs={false}>
                {payload?.pictures?.map((image) => {
                  return (
                    <div key={image} className="bg-gray-100 h-[500px]">
                      <Image
                        src={image}
                        alt="Zdjęcie lokalu"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          ) : null}

          <p className="p-5 text-gray-800 font-bold pt-2.5 text-2xl">
            Cena: {payload?.price} PLN
          </p>
          <div className="bg-gray-100 grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)]">
            {getInfo?.map(({ label, value, name }) => {
              return (
                <div key={name} className="px-5 py-3">
                  <p className="uppercase text-gray-600 text-center">{label}</p>
                  <p className="text-gray-800 font-bold pt-2.5 text-sm text-center">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
          {payload?.description ? (
            <div className="ml-5">
              <p className="text-gray-800 font-bold uppercase text-2xl mt-8 mb-2.5">
                Opis
              </p>
              <div
                className="text-gray-600 text-base leading-normal"
                dangerouslySetInnerHTML={{ __html: payload?.description }}
              />
            </div>
          ) : null}
        </div>

        {payload?.contact_name ? (
          <div className="p-5 order-2">
            <p className="font-semibold text-gray-600 uppercase text-base">
              Osoba kontaktowa
            </p>
            <p className="font-bold text-gray-800 text-3xl mt-0.5 mb-1.5">
              {payload?.contact_name}
            </p>
            <p className="text-blue-600 text-base">
              Tel: {payload?.contact_phone}
            </p>
          </div>
        ) : null}

        <div className="p-5 bg-gray-100 h-max order-4">
          <p className="text-gray-800 text-2xl font-semibold mt-0.5 mb-1.5">
            Podobne zlecenia
          </p>
          <div className="mt-8 pb-4 border-b border-gray-200">
            <div className="bg-gray-100 relative h-40 ">
              <Image
                src={payload?.pictures[0]}
                alt="Zdjęcie lokalu"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="font-bold text-gray-800 pt-3 text-xl">
              {payload?.name}
            </p>
            <p className="text-gray-800 pt-3 pl-3 text-base">
              Piętro: {payload?.floor}
            </p>
            <p className="text-gray-800 pt-3 pl-3 text-base">
              Powierzchnia: {payload?.area}
            </p>
            <p className="text-gray-800 pt-3 pl-3 text-base">
              Pokoje: {payload?.rooms}
            </p>
            <p className="text-gray-800 pt-3 pl-3 text-base">
              {isLogged
                ? `Cena: ${payload?.price} PLN`
                : "Zaloguj się aby zobaczyć cenę"}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await FlatsService.getFlat(context?.params?.id);

  if (res?.status !== 200 || !res?.data?.payload)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  return {
    props: { payload: res?.data?.payload },
  };
}

export default FlatScreen;
