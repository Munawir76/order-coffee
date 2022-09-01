import { useRouter } from "next/router";
import { Button } from "antd";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
const Invoice = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [menu, setMenu] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const getUser = async () => {
    const getToken = localStorage.getItem("transactionId");
    let res = await axios.get(
      `https://api.cannis-catering.online/transactions/checkout/${getToken}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    console.log(res.data.data);
    setName(res.data.data.user.fullName);
    setAddress(res.data.data.user.address);
    setPhone(res.data.data.user.phone);
    setMenu(res.data.data.menu.menu);
    setPrice(res.data.data.menu.price);
    setDate(res.data.data.createdAt);
  };

  useEffect(() => {
    getUser();
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice",
  });

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-gray-100"
        ref={componentRef}
      >
        <div className="w-5/5 bg-white shadow-lg">
          <div className="flex justify-between p-4">
            <div>
              <h1 className="text-3xl italic font-extrabold tracking-widest text-fontColor">
                CannisCatering
              </h1>
            </div>
          </div>
          <div className="w-full h-0.5 bg-fontColor" />
          <div className="flex justify-between p-4">
            <div>
              <h6 className="font-bold">
                Order Date :
                <span className="text-sm font-medium">
                  <p>{date.split("T")[0]}</p>
                </span>
              </h6>
              {/* <h6 className="font-bold">
                  Order ID :
                  <span className="text-sm font-medium"> 12/12/2022</span>
                </h6> */}
            </div>
            <div className="w-40">
              <address className="text-sm">
                <span className="font-bold"> Billed To : </span>
                {name} ({phone})
              </address>
            </div>
            <div className="w-40">
              <address className="text-sm">
                <span className="font-bold">Ship To : </span>
                {address}
              </address>
            </div>
            <div />
          </div>
          <div className="flex justify-center p-4">
            <div className="border-b border-gray-200 shadow">
              <table className="">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-xs text-gray-500 ">#</th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Product Name
                    </th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">Rate</th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">1</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{menu}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">1</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Rp.{price}
                    </td>
                    <td className="px-6 py-4">Rp.{price}</td>
                  </tr>

                  {/*end tr*/}
                  <tr>
                    <th colSpan={3} />
                    <td className="text-sm">
                      <b>Shipping Fee</b>
                    </td>
                    <td className="text-sm">
                      <b>Rp.0</b>
                    </td>
                  </tr>
                  {/*end tr*/}
                  <tr className="text-black">
                    <th colSpan={3} />
                    <td className="text-sm font-bold">
                      <b>Total</b>
                    </td>
                    <td className="text-sm font-bold">
                      <b>Rp.{price}</b>
                    </td>
                  </tr>
                  {/*end tr*/}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full h-0.5 bg-fontColor" />
          <div className="p-4">
            <div className="flex items-center justify-center">
              Thank you very much
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center" style={{ marginTop: -250 }}>
        <button
          className="px-10 py-2 text-xl text-green-600 bg-green-100 "
          onClick={handlePrint}
        >
          Save/Print
        </button>
      </div>
    </>
  );
};

export default Invoice;
