"use client";
import Image from "next/image";
import { Alert, Button, Carousel, Input, Rate, Select } from "antd";
import Link from "next/link";
import "antd/dist/antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { message, Space } from "antd";

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Vui lòng nhập thông tin")
      .max(255, "Maximum length: 255 characters"),

    address: yup
      .string()
      .required("Vui lòng nhập thông tin")
      .max(255, "Maximum length: 255 characters"),
    icon: yup
      .string()
      .required("Vui lòng nhập thông tin")
      .max(255, "Maximum length: 255 characters"),
    year: yup
      .number()
      .min(1, "Năm phải lớn hơn 0")
      .required("Vui lòng nhập thông tin"),
    number: yup
      .string()
      .matches(/^(0\d{9})$/, "Số điện thoại không hợp lệ") // Đây là một ví dụ đơn giản, bạn có thể định nghĩa quy tắc xác thực phức tạp hơn
      .required("Vui lòng nhập số điện thoại"),
    type: yup.string().required("Cannot be empty"),
  })
  .required();

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Home() {
  const menus = [
    {
      image: "/a.svg",
      title: "VÌ SAO CHỌN TÀI XẾ XE CÔNG NGHỆ",
    },
    {
      image: "/i.svg",
      title: "GIẤY TỜ CẦN CHUẨN BỊ",
    },
    {
      image: "/b.svg",
      title: "QUY TRÌNH CHUẨN BỊ",
    },
    {
      image: "/c.svg",
      title: "HƯỚNG DẪN NGAY",
    },
  ];
  const contents = [
    {
      imgae: "/icon1x-20230705150735-zatax.png",
      header: "Thu nhập",
      title:
        " Thu nhập hấp dẫn lên tới 35 triệu đồng khi hoạt động toàn thời gian mỗi tháng",
    },
    {
      imgae: "/icon2x-20230705153846-vmln4.png",
      header: "Hợp pháp",
      title:
        "Grabcar là ứng dụng đầu tiên được chính phủ Việt Nam chấp thuận là đề án thí điểm đặt xe qua điện thoại di động theo quyết định số 24/QĐ BGTVT (7-1-2016)",
    },
    {
      imgae: "/icon3c-20230705153849-pc14_.png",
      header: "Chủ động",
      title:
        "Bạn có thể đón khách và gia tăng thu nhập bất cứ khi nào mà bạn cảm thấy thoải mái nhất mà không chịu bất cứ ràng buộc nào",
    },
    {
      imgae: "/icon4c-20230705153852-zh4to.png",
      header: "An toàn",
      title:
        "Tham gia hoạt động lái xe an toàn hơn với chính sách bảo hiểm tự nguyện tai nạn dân sự dành cho cả tài xế và hành khách",
    },
  ];
  const registers = [
    {
      image: "/xe1x-20230706031824-ee7go.png",
      title:
        " Bạn đang sở hữu xe hơi nhàn rỗi và mong muốn tìm kiếm thêm thu nhập",
    },
    {
      image: "/xe2-20230706031827-vuptm.png",
      title: " Lắp thiết bị hộp đen (Giám sát hành trình)",
    },
    {
      image: "/xe3c-20230706031831-w_1ig.png",
      title:
        "Chạy xe đến trung tâm đăng kiểm để yêu cầu chuyển đổi thành xe đăng kiểm kinh doanh",
    },
    {
      image: "/xe4c-20230706031834-z4gmh.png",
      title:
        "Chuyển đổi mục đích sử dụng của bảo hiểm bắt buộc trách nhiệm thành kinh doanh",
    },
    {
      image: "/xe5c-20230706031838-6dihb.png",
      title:
        "Đăng ký 1 đơn vị pháp nhân (Hợp tác xã) để xin cấp phù hiệu xe hợp đồng",
    },
    {
      image: "/xe6c-20230706031842-kuhvi.png",
      title:
        "Mang theo giấy tờ cá nhân và giấy tờ để lên văn phòng đăng ký Grabcar",
    },
  ];
  const features = [
    {
      image: "/download.svg",
      title:
        "Chứng minh nhân dân bản gốc (hoặc bản sao y chứng thực không quá 6 tháng)",
    },
    {
      image: "/download.svg",
      title: "Giấy chứng nhận đăng ký xe ôtô",
    },
    {
      image: "/download.svg",
      title: "Giấy chứng nhận đăng kiểm kinh doanh",
    },
    {
      image: "/download.svg",
      title: "Bảo hiểm bắt buộc trách nhiệm dân sự kinh doanh",
    },
    {
      image: "/download.svg",
      title: "Giấy xác nhận xã viên đăng ký tham gia HTX",
    },
    {
      image: "/download.svg",
      title: "Phù hiệu xe chạy hợp đồng",
    },
  ];
  const files = [
    {
      image: "/download.svg",
      title:
        "Chứng minh nhân dân bản gốc (hoặc bản sao y chứng thực không quá 6 tháng)",
    },
    {
      image: "/download.svg",
      title: "Giấy phép lái xe hạng B2 trở lên",
    },
    {
      image: "/download.svg",
      title:
        "Giấy khám sức khỏe + xét nghiệm ma túy (thời hạn không quá 3 tháng)",
    },
    {
      image: "/download.svg",
      title: "Lý lịch tư pháp bản số 1 hoặc bản số 2",
    },
  ];
  const chats = [
    {
      image: "g3-20240319041152-yvbwj.jpg",
      title:
        "Trước em chạy xe xăng, mới đổi sang xe điện chạy grap ngon luôn các bác, tiền xăng tiết kiệm đc 1 mớ",
      name: "Trần Trung Kiên",
      address: "Cầu Giấy, Hà Nội",
    },
    {
      image:
        "/z4496590129218_76ca2a0cc07ed3d140e8a09bfc231c3c-20230707105453-qexv2.jpg",
      title:
        "Tôi đang đăng ký chạy liền 3 ứng dụng Grab car, becar, gocar để tối ưu hóa nguồn thu nhập. Chỉ cần tem phù hiệu của Hợp Tác Xã cấp cho là muốn đăng ký chạy bên nào cũng đc.",
      name: "Lê Mạnh Hòa",
      address: "Mỹ Đình, Nam Từ Liêm, Hà Nội",
    },
    {
      image:
        "/z4496590125387_ee265de15850120d54e9c6e08aca6ffa-20230707105450-43edy.jpg",
      title:
        "tôi từng chạy taxi truyền thống. Tuy nhiên không thể cạnh tranh được với hãng xe công nghệ. Hiện nay Grab và be đều chạy chương trình đảm bảo thu nhập, nếu có đủ số điểm tích lũy nhưng doanh thu không đạt, thì hãng sẽ bù khoản doanh thu còn thiếu cho tài xế",
      name: "Nguyễn Văn Sơn",
      address: "Long Biên, Hà Nội",
    },
  ];
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng ký thành công",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đăng ký thất bại",
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`/api/?data=${JSON.stringify(data)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        success();
        reset();
      } else {
        error();
        reset();
        console.error("Failed to send email");
        // Xử lý khi gửi email thất bại
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Xử lý lỗi
    }
  };
  return (
    <div className="w-full">
      {contextHolder}
      <div className="flex w-full flex-col items-center justify-between relative">
        <div className="w-full md:h-[40rem] h-[40rem]">
          <Image
            src="/g55-20240319042742-03gxb.jpg"
            className="rounded-md h-full"
            width={1600}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="text-white absolute md:top-56 top-96 md:left-72 left-24  ">
          <h3 className="text-[45px] font-bold">Hướng Dẫn Đăng Ký</h3>
          <div className="w-[34rem]">
            Tham khảo thông tin hồ sơ hoặc đăng ký để chúng tôi giúp bạn hoàn
            tất các bước chuẩn bị. Hãy đăng ký để trở thành tài xế lái xe công
            nghệ
          </div>
          <div className="flex justify-center items-center text-[20px] w-52 h-12 bg-green-600 border-green-600 rounded-xl m-[25px]">
            <Link href="#">Hướng dẫn ngay</Link>
          </div>
        </div>
        <div className=" hidden justify-center md:flex">
          <div className="w-[90%] absolute bottom-0 bg-green-400 bg-opacity-50 h-36 hover:bg-green-600 border flex items-center justify-center">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="w-1/5 flex text-white items-center justify-around"
              >
                <div className=" flex justify-center items-center w-16 h-16 bg-white border rounded-xl">
                  <div className="flex justify-center items-center border w-14 h-14 border-2 border-green-400 rounded-full">
                    <Image
                      src={menu.image}
                      className="w-10 h-10"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div className="ml-[20px]">{menu.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[600px] bg-white relative flex  ">
        {/* <div className="md:w-1/2 w-full md:mt-0 mt-[72px] h-[500px] bg-[url('/655486228925-bk-1x-20230705145317-8eqkx.jpg')] bg-cover ml-[8%] flex"></div> */}
        <div className="md:w-1/2 w-full  h-[500px] md:mt-0 mt-[72px] ml-[8%] flex">
          <Image
            src="/655486228925-bk-1x-20230705145317-8eqkx.jpg"
            className="rounded-md h-full"
            width={1800}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="md:w-[55%] w-full h-[500px]  absolute md:left-[53%] left-7">
          <div className="w-30 text-[50px] text-green-600 font-bold mt-[50px]">
            G
          </div>
          <div className="w-30 text-[30px] font-[900]  mb-3">
            Lựa chọn hàng đầu của tài xế công nghệ
          </div>
          <div className="w-full h-[20rem] grid md:grid-cols-2 grid-cols-1 grid-flow-row md:mt-0 mt-[50%]">
            {contents.map((content, index) => (
              <div
                key={index}
                className="w-[98%] h-28 border bg-white rounded-full shadow-lg flex items-center md:mt-0 mt-[10px] md:ml-0 ml-2"
              >
                <div className="md:w-[22%] w-[125px] h-16 border rounded-full bg-green-500 flex justify-center items-center mx-[10px]">
                  <Image
                    src={content.imgae}
                    className="w-10 h-10"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                </div>
                <div className="w-[70%]">
                  <div className="text-blue-900 font-bold text-[18px] pb-1">
                    {content.header}
                    <hr className="w-20 border border-green-400" />
                  </div>
                  <div className="md:text-[12px] text-[14px]">
                    {content.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-[24%] md:mt-0">
            <div className="flex justify-center items-center text-[20px] w-52 h-12 bg-green-600 border-green-600 rounded-xl m-[25px] text-white">
              <Link href="#">Tìm hiểu ngay</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center mt-[65%] md:mt-0">
        <div className="w-[90%] min-h-[600px] bg-white  ">
          <div className="text-[40px] font-bold text-green-500 flex justify-center m-2 ">
            Các bước chuẩn bị hồ sơ đăng ký
          </div>
          <div className="flex justify-center ">
            Dưới đây là các bước để chuẩn bị hồ sơ đăng ký tài xế xe công nghệ
          </div>
          <div className="w-full md:h-[20rem] h-[214rem] grid md:grid-cols-3 grid-cols-1 grid-flow-row ">
            {registers.map((register, index) => (
              <div
                key={index}
                className="w-[95%] md:h-[480px] h-[701px]  border-2 border-green-400 rounded-2xl mt-16 ml-[10px] "
              >
                <div
                  style={{ backgroundImage: `url(${register.image})` }}
                  className="w-full md:h-96 h-[38rem]  bg-cover rounded-lg"
                ></div>
                <div className="w-full h-[90px] flex items-center text-green-400 justify-center text-center md:text-[16px] text-[21px] font-bold p-3">
                  {register.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center md:mt-[35%] mt-[130%]">
        <div className="w-[90%] h-[600px] bg-white relative mt-14 ">
          <div className="text-[40px] font-bold text-green-500 flex justify-center m-2 ">
            Giấy tờ cần chuẩn bị để đăng ký
          </div>
          <div className="flex justify-center ">
            Quý Anh/Chị vui lòng tham khảo và tìm hiểu hồ sơ đăng ký trở thành
            tài xế GrabCar tại đây.
          </div>
          <div className="w-full md:flex-row flex-col md:h-[500px] h-[1000px]  flex justify-evenly ">
            <div className="md:w-1/3 w-full h-[29rem] md:h-96 bg-white rounded-md p-2 my-8 ">
              <div className="text-[30px] font-bold custom-text pt-3 pb-6 border-b-2 flex items-center">
                <Image
                  src="/admin.svg"
                  className="rounded-md"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <span className="ml-3 text-blue-900">Đối với chủ xe</span>
              </div>
              <div className="pt-2">
                <ul>
                  {features?.map((feature, index) => (
                    <li key={index} className="flex items-center py-2">
                      <div className="w-10">
                        <Image
                          src={feature.image}
                          className="rounded-md"
                          width={30}
                          height={30}
                          alt="Picture of the author"
                        />
                      </div>
                      <p className="text-[17px] font-medium w-[80%]">
                        {feature.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/3 w-full h-[29rem] md:h-96 bg-white rounded-md p-2 my-8">
              <div className="text-[30px]  font-bold custom-text  pt-3 pb-6 border-b-2 flex items-center">
                <Image
                  src="/car.svg"
                  className="rounded-md"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <span className="ml-3 text-blue-900">Đối với tài xế</span>
              </div>
              <div className="pt-2">
                <ul>
                  {files?.map((file, index) => (
                    <li key={index} className="flex items-center py-2">
                      <div className="w-10 ">
                        <Image
                          src={file.image}
                          className="rounded-md mr-2"
                          width={30}
                          height={30}
                          alt="Picture of the author"
                        />
                      </div>
                      <p className="text-[17px] font-medium w-[80%]">
                        {file.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[150px] h-[200px] bg-green-500 flex  justify-center items-center md:mt-0 mt-[53%]">
        <div className="flex justify-around md:flex-row flex-col items-center w-[90%]">
          <div className="mx-5">
            <div className="md:text-[30px] text-[26px] font-bold text-white h-14">
              Lái xe G - Toàn thời gian hoặc bán thời gian
            </div>
            <div className="text-gray-200">
              Chủ động thời gian làm việc, thu nhập lên đến 35 triệu đồng mỗi
              tháng
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="flex justify-center items-center text-[16px] font-bold w-40 h-12 bg-yellow-300 border-green-600 rounded-full m-[25px] text-white">
              <Link href="#">ĐĂNG KÍ NGAY</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[600px] h-[1300px] flex justify-center bg-sky-50">
        <div className="w-[90%] h-[600px] relative mt-7  md:ml-0 ml-[10px]">
          <div className="w-full flex justify-center ">
            <div className=" md:w-[50%] w-[76%] text-[40px] font-bold text-green-500 flex justify-center m-2 text-center ">
              CẢM NHẬN CỦA KHÁCH HÀNG VỀ SẢN PHẨM/DỊCH VỤ
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <hr className="w-52 border-red-500 border-2" />
          </div>
          <div className="w-full h-[20rem] grid md:grid-cols-3 grid-cols-1 grid-flow-row ">
            {chats.map((chat, index) => (
              <div
                key={index}
                className="w-[95%] h-[300px] bg-white shadow-lg rounded-lg mt-16 ml-[10px] md:ml-0"
              >
                <div className="flex w-full px-5 py-8 justify-between">
                  <Image
                    src="/y.svg"
                    className="rounded-md mr-2 fill-blue-900"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <div>
                    <Rate defaultValue={5} />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex justify-center">
                    <div className=" w-[90%] flex justify-center h-32 border-b-2 ">
                      <div className="text-blue-900 text-center w-full">
                        {chat.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center mx-8 h-20 ">
                    <div
                      className="w-14 h-14 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${chat.image})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="text-[16px] font-bold">{chat.name}</div>
                      <div className="text-[14px] italic">{chat.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[810px] flex justify-center bg-white">
        <div className="w-[90%] h-[810px] relative mt-9 ">
          <div className="flex justify-center text-center">
            <div className="md:w-[40%] w-[80%] h-[730px] border bg-white shadow-lg rounded-lg py-[28px]">
              <div className="text-[40px] font-bold text-green-500 flex justify-center m-2 ">
                Thông tin đăng ký
              </div>
              <div className="flex justify-center text-center">
                <div className="flex text-center w-[62%]">
                  Đăng ký thông tin bên dưới để nhận ưu đãi miễn phí làm tem phù
                  hiệu Hợp Tác Xã trị giá 500K
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[100%] pt-4 px-20">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <div className="w-full h-16">
                        <Input
                          {...field}
                          className="h-[50px]"
                          status={errors.name?.message ? "error" : undefined}
                          placeholder="Nhập họ và tên"
                        />
                        <p className="m-0 text-[red] text-[12px] flex py-1 px-1">
                          {errors.name?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
                <div className="w-[100%] pt-4 px-20">
                  <Controller
                    name="number"
                    control={control}
                    render={({ field }) => (
                      <div className="w-full h-16">
                        <Input
                          {...field}
                          className="h-[50px]"
                          status={errors.number?.message ? "error" : undefined}
                          placeholder="Số điện thoại"
                        />
                        <p className="m-0 text-[red] text-[12px] flex py-1 px-1">
                          {errors.number?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
                <div className="w-[100%] pt-4 px-20">
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <div className="w-full h-16">
                        <Input
                          {...field}
                          className="h-[50px]"
                          status={errors.address?.message ? "error" : undefined}
                          placeholder="Nơi ở hiện tại"
                        />
                        <p className="m-0 text-[red] text-[12px] flex py-1 px-1">
                          {errors.address?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
                <div className="w-[100%] pt-4 px-20">
                  <Controller
                    name="icon"
                    control={control}
                    render={({ field }) => (
                      <div className="w-full h-16">
                        <Input
                          {...field}
                          className="h-[50px]"
                          status={errors.icon?.message ? "error" : undefined}
                          placeholder="Nhãn hiệu xe(KIA,HUYNDAI,...)"
                        />
                        <p className="m-0 text-[red] text-[12px] flex py-1 px-1">
                          {errors.icon?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
                <div className="w-[100%] pt-4 px-20">
                  <Controller
                    name="year"
                    control={control}
                    render={({ field }) => (
                      <div className="w-full h-16">
                        <Input
                          {...field}
                          className="h-[50px]"
                          status={errors.year?.message ? "error" : undefined}
                          placeholder="Năm sản xuất"
                        />
                        <p className="m-0 text-[red] text-[12px] flex py-1 px-1">
                          {errors.year?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
                <div className="w-[100%] pt-4 px-20">
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <div className="w-full h-16">
                        <Select
                          className="w-full flex h-[50px]"
                          value={watch("type")}
                          allowClear
                          placeholder="Chọn loại dịch vụ"
                          onChange={(val) => setValue("type", val)}
                          options={[
                            {
                              value: "Đăng kí dịch vụ làm tài xế",
                              label: "Đăng kí dịch vụ làm tài xế",
                            },
                            {
                              value: "Grab Car (ô tô)",
                              label: "Grab Car (ô tô)",
                            },
                            {
                              value: "Grab Bike (xe máy)",
                              label: "Grab Bike (xe máy)",
                            },
                          ]}
                        />
                        {errors.type && (
                          <p className="m-0 text-[red] text-[12px] flex py-1 px-1">
                            {errors.type.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="w-[100%] pt-4 px-20 flex justify-center">
                  <div className=" flex justify-center">
                    <div className="flex justify-center items-center text-[16px] font-bold w-40 h-12 bg-green-500 border-green-600 rounded-full mx-[25px] my-[5px]  text-white">
                      <button type="submit">ĐĂNG KÍ NGAY</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] flex justify-center bg-blue-950">
        <div className="w-[80%] p-7 text-white">
          <div className="text-[30px]  font-bold">Thông tin liên hệ: </div>
          <div className="h-16 flex items-center">
            {/* <div className="w-14 h-14 bg-[url('/phone.svg')] rounded-full bg-cover"></div> */}
            <div className="w-14 h-14">
              <Image
                src="/phone.svg"
                className="rounded-md h-full"
                width={1800}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="mx-3">
              Ms. Huyền 0981207729 - Trưởng Phòng hỗ trợ tài xế đăng ký mới
              <div>đ/c: số 19 Xuân Quỳnh, Trung Hoà, Cầu Giấy, HN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
