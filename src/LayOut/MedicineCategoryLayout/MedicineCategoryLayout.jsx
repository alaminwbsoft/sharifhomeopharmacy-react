import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";
import DropdownButton from "./DropDownBtn/DropDownButton";
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import MiniProductHorizontalCard from "../../Components/ProductCards/MiniProductHorizontalCard";
import store from "../../assets/store.png";
import Collapse from "./Collapse/Collapse";

function MedicineCategoryLayout() {
  const navigate = useNavigate();

  const dummyProducts = [
    {
      id: 1,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p1.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 2,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p2.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 3,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p3.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 4,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p4.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 5,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p5.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 6,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p6.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 7,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p7.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
    {
      id: 8,
      name: "Dr. Reckeweg Ginkgo Biloba Q 20ML (Sealed)",
      image: "/src/assets/p8.jpg",
      reference: "Dr.Ginkgo.B",
      condition: "New product",
      description:
        "Ginkgo Biloba Mother Tincture is a homeopathic formulation that helps to improve the concentration, improves mental alertness, elevates mood and restores energy. It is very effective for improving symptoms of anxiety, cognitive function, dementia, and diabetic retinopathy.",
      KeyIngredients: "Ginkgo Biloba (leaves)",
      status: "available",
      price: "450BDT",
    },
  ];

  return (
    <div className="lg:w-[80%] mx-auto lg:flex justify-center min-h-screen">
      {/* -------------------------------------------------------------------------------- side bar ------------ */}
      <div className="lg:w-[30%] hidden lg:block mx-auto">
        {/* ---- section 1 -------- shows tab */}
        <div className="my-10">
          <div>
            <button
              onClick={() => navigate("/")}
              className="border-2 border-gray-400 rounded-sm px-4 py-2"
            >
              <GoHome className="text-xl" />
            </button>
          </div>
          {/* <div>
            <button>google icon prefered language</button>
          </div> */}
        </div>
        {/* ---- section 2 --------- shows cat,subcat, subsubcat */}
        <div className="mb-8">
          {/* page title here */}
          <HorizontalLine />
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            DILUTIONS & POTENCIES
          </div>
          <div>
            {/* --- map the sub categories here --- */}
            <div className="py-3 flex justify-start items-center text-sm text-primary cursor-pointer hover:bg-customGray-200">
              Regular Medicine
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="py-3 flex justify-start items-center text-sm text-primary cursor-pointer hover:bg-customGray-200">
              COMBINATIONS
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="py-3 flex justify-start items-center text-sm text-primary cursor-pointer hover:bg-customGray-200">
              Dilution Potency (Sealed Packed)
            </div>
            <hr className="border-1 border-secondary/80" />
          </div>
        </div>
        {/* ---- section 3 --------- General info */}
        <div>
          <HorizontalLine />
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            INFORMATION
          </div>
          <div className="my-10">
            <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
              <MdKeyboardArrowRight />
              <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                Delivery
              </div>
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
              <MdKeyboardArrowRight />
              <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                Legal Notice
              </div>
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
              <MdKeyboardArrowRight />
              <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                Terms and Conditions of use
              </div>
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
              <MdKeyboardArrowRight />
              <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                About us
              </div>
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
              <MdKeyboardArrowRight />
              <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                Secure Payment
              </div>
            </div>
            <hr className="border-1 border-secondary/80" />
            <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
              {" "}
              <MdKeyboardArrowRight />
              <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                Our Stores
              </div>
            </div>
            <hr className="border-1 border-secondary/80" />
          </div>
        </div>
        {/* ---- section 4 ---------- map New Products */}
        <div>
          <HorizontalLine />
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            NEW PRODUCTS
          </div>
          <div>
            {dummyProducts.slice(0, 5).map((product) => (
              <MiniProductHorizontalCard
                key={product.id}
                product={product}
              ></MiniProductHorizontalCard>
            ))}
          </div>
          <div className="my-10 mx-auto">
            <button className="bg-secondary/70 text-customGray-100 mx-auto p-2 rounded-sm flex justify-start items-center gap-3">
              <div>All new products</div> <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        {/* ---- section 5 ---------- Specials */}
        <div>
          <HorizontalLine />
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            SPECIALS
          </div>
          <div>
            {dummyProducts.slice(0, 2).map((product) => (
              <MiniProductHorizontalCard
                key={product.id}
                product={product}
              ></MiniProductHorizontalCard>
            ))}
          </div>
          <div className="my-10 mx-auto">
            <button className="bg-secondary/70 text-customGray-100 mx-auto p-2 rounded-sm flex justify-start items-center gap-3">
              <div>All Specials</div> <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        {/* ---- section 6 ---------- Our Stores ----- */}
        <div className="text-secondary/75 my-3 ">
          <HorizontalLine></HorizontalLine>
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            OUR STORES
          </div>
          <div className="mx-auto">
            <img src={store} alt="" className="mx-auto" />
          </div>
          <div className="my-10 mx-auto">
            <button className="bg-secondary/70 text-customGray-100 mx-auto p-2 rounded-sm flex justify-start items-center gap-3">
              <div>Discover our stores</div> <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        {/* ---- section 7 ---------- TAGS ------ */}
        <div className="mb-10">
          <HorizontalLine />
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            TAGS
          </div>
          <div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              Dilution
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              Dr.Schwabe
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              tablet
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              3x
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              schwabe
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              200 CH
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              tab
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              Germany
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              Homeopathy Medicine
            </div>
            <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
              rax
            </div>
          </div>
        </div>
        {/* ---- section 8 ---------- Viewed products ----- */}
        <div>
          <HorizontalLine />
          <div className="text-secondary/75 font-semibold my-3 text-xl">
            VIEWED PRODUCTS
          </div>
          <div>
            {/* ----- map viewed products here -----
             */}
            <div>
              {dummyProducts.slice(0, 2).map((product) => (
                <MiniProductHorizontalCard
                  key={product.id}
                  product={product}
                ></MiniProductHorizontalCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- sidebar responsive ----------- */}
      <div className="lg:hidden sm:w-full">
        {/* ------------ INFORMATION -------- */}
        <div className="p-4">
          <Collapse title="INFORMATION">
            <div className="">
              <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
                <MdKeyboardArrowRight />
                <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                  Delivery
                </div>
              </div>
              <hr className="border-1 border-secondary/80" />
              <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
                <MdKeyboardArrowRight />
                <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                  Legal Notice
                </div>
              </div>
              <hr className="border-1 border-secondary/80" />
              <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
                <MdKeyboardArrowRight />
                <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                  Terms and Conditions of use
                </div>
              </div>
              <hr className="border-1 border-secondary/80" />
              <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
                <MdKeyboardArrowRight />
                <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                  About us
                </div>
              </div>
              <hr className="border-1 border-secondary/80" />
              <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
                <MdKeyboardArrowRight />
                <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                  Secure Payment
                </div>
              </div>
              <hr className="border-1 border-secondary/80" />
              <div className="flex justify-start items-center gap-3 cursor-pointer my-2">
                {" "}
                <MdKeyboardArrowRight />
                <div className="text-sm text-secondary/70 font-semibold hover:text-primary hover:text-base transition-all duration-200 ease-in-out">
                  Our Stores
                </div>
              </div>
              <hr className="border-1 border-secondary/80" />
            </div>
          </Collapse>
        </div>

        {/* ---------- NEW PRODUCTS --------- */}
        <div className="p-4">
          <Collapse title="NEW PRODUCTS">
            <div>
              {dummyProducts.slice(0, 5).map((product) => (
                <MiniProductHorizontalCard
                  key={product.id}
                  product={product}
                ></MiniProductHorizontalCard>
              ))}
            </div>
            <div className="my-10 mx-auto">
              <button className="bg-secondary/70 text-customGray-100 mx-auto p-2 rounded-sm flex justify-start items-center gap-3">
                <div>All new products</div> <MdKeyboardArrowRight />
              </button>
            </div>
          </Collapse>
        </div>

        {/* ------------- SPECIALS ------------- */}
        <div className="p-4">
          <Collapse title="SPECIALS">
            <div>
              {dummyProducts.slice(0, 2).map((product) => (
                <MiniProductHorizontalCard
                  key={product.id}
                  product={product}
                ></MiniProductHorizontalCard>
              ))}
            </div>
            <div className="my-10 mx-auto">
              <button className="bg-secondary/70 text-customGray-100 mx-auto p-2 rounded-sm flex justify-start items-center gap-3">
                <div>All Specials</div> <MdKeyboardArrowRight />
              </button>
            </div>
          </Collapse>
        </div>

        {/* -------------- OUR STORES ---------- */}
        <div className="p-4">
          <Collapse title="OUR STORES">
            <div className="mx-auto">
              <img src={store} alt="" className="mx-auto" />
            </div>
            <div className="my-10 mx-auto">
              <button className="bg-secondary/70 text-customGray-100 mx-auto p-2 rounded-sm flex justify-start items-center gap-3">
                <div>Discover our stores</div> <MdKeyboardArrowRight />
              </button>
            </div>
          </Collapse>
        </div>

        {/* -------------- TAGS -------------- */}
        <div className="p-4">
          <Collapse title="TAGS">
            <div className="mb-10">
              <div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  Dilution
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  Dr.Schwabe
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  tablet
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  3x
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  schwabe
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  200 CH
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  tab
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  Germany
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  Homeopathy Medicine
                </div>
                <div className="border text-sm text-secondary/70 border-secondary/60 p-1 font-semibold rounded-sm m-0.5 inline-block cursor-pointer hover:text-secondary hover:bg-customGray-200">
                  rax
                </div>
              </div>
            </div>
          </Collapse>
        </div>

        {/* -------------- VIEWED PRODUCTS ---------------- */}
        <div className="p-4">
          <Collapse title="VIEWED PRODUCTS">
            <div>
              {/* ----- map viewed products here -----
               */}
              <div>
                {dummyProducts.slice(0, 2).map((product) => (
                  <MiniProductHorizontalCard
                    key={product.id}
                    product={product}
                  ></MiniProductHorizontalCard>
                ))}
              </div>
            </div>
          </Collapse>
        </div>
      </div>

      {/* ----------------- main content area ------------ */}
      <div className="lg:w-[70%]">
        <Outlet />
      </div>
    </div>
  );
}

export default MedicineCategoryLayout;
