import FirstBanner from "@/components/FirstBanner";
import StyledAccordion from "@/components/StyledAccordion";
import { deliveryData } from "@/data/delivery";
import { NextPage } from "next";

export const generateMetadata = () => {
  return {
    title: "Chính sách giao nhận & vận chuyển",
    description:
      "Thông tin mới nhất về chính sách giao nhận & vận chuyển đối với sản phẩm xe Mazda tại website chính thức của Mazda Sài Gòn.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/chinh-sach-giao-nhan-van-chuyen`,
  };
};

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN"
        subHeading="Thông tin chi tiết về chính sách Giao nhận - Vận chuyển tại Mazda."
        bgImg="/images/chinh-sach-bao-hanh/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN
        </h2>
        <StyledAccordion data={deliveryData} initialOpened={0} />
      </div>
    </div>
  );
};

export default page;
