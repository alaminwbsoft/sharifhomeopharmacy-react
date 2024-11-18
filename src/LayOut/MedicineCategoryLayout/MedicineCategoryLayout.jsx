import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import MiniProductHorizontalCard from "../../Components/ProductCards/MiniProductHorizontalCard";
import store from "../../assets/store.png";
import Collapse from "./Collapse/Collapse";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import SubCategoryCard from "../../Components/ProductCards/SubCategoryCard";
import GridviewCard from "../../Components/ProductCards/GridviewCard";
import ListViewCard from "../../Components/ProductCards/ListViewCard";

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
      status: "stock out",
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

  const dummySubCat = [
    {
      title: "REGULAR MEDICINE",
      image: "/src/assets/p8.jpg",
    },
    {
      title: "COMBINATIONS",
      image: "/src/assets/p7.jpg",
    },
    {
      title: "DILUTION POTENCY",
      image: "/src/assets/p8.jpg",
    },
  ];

  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const breadcrumbItems = [
    { label: "Home", href: "/", isCurrent: false },
    {
      label: "Dilutions & Potions",
      href: "/medicineCategory/dilutions",
      isCurrent: false,
    },
    { label: "Regular", href: "/medicineCategory/dilReg", isCurrent: false },
  ];

  // --------------- grid view or list view ----
  const [gridView, setGridView] = useState(false);
  const [listView, setListView] = useState(true);

  const handleGridView = () => {
    setGridView(true);
    setListView(false);
  };

  const handleListView = () => {
    setGridView(false);
    setListView(true);
  };

  return (
    <div className="my-5 mx-auto lg:flex justify-center min-h-screen">
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
            <BreadCrumb items={breadcrumbItems} />
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

      <div className="lg:w-[70%]">
        {/* ----------------------------- medicine sub category header ---------------------------- */}
        <div className="lg:m-2">
          {/* ------------------------ first section top banner with line at top ------------- */}
          <div>
            <HorizontalLine />
            {/* <img src={dilutionsBanner} alt="medicine image" /> */}
          </div>

          {/* ------------------------ second section page title ------------------ */}
          <div className="lg:flex-col lg:items-center lg:justify-start ">
            <div className="text-secondary/75 font-semibold mt-7 text-xl">
              DILUTIONS & POTENCIES
            </div>
            <div className="text-secondary/75 font-medium text-sm">
              (There are 502 products)
            </div>
            <hr className="my-5 border-secondary/60 border" />
          </div>

          {/* ----------------------------- subCategories --------------------------- */}
          <div>
            <div className="text-sm text-primary font-semibold text-start mb-3">
              Subcategories
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 ">
              {dummySubCat.map((card, index) => (
                <SubCategoryCard key={index} card={card}></SubCategoryCard>
              ))}
            </div>
          </div>

          {/* ----------------------------- sorting and Viewing (grid / list) -------- */}
          <div className="flex justify-between items-center my-8">
            <div>sort by and show</div>
            <div className="flex items-center justify-between gap-3">
              <div>view:</div>
              <BiSolidGridAlt
                className={`cursor-pointer hover:text-gray-500 ${
                  gridView ? "text-3xl text-primary" : "text-2xl text-gray-300"
                }`}
                onClick={handleGridView}
              />
              <FaList
                className={`cursor-pointer hover:text-gray-500 ${
                  listView ? "text-3xl text-primary" : "text-2xl text-gray-300"
                }`}
                onClick={handleListView}
              />
            </div>
          </div>

          {/* ---------------------------- viewing info list -------------------- */}
          <div className="my-8">
            <hr />
            <div className="flex justify-evenly items-center">
              <div>showing 1-12 of 502 items</div>
              <div>pagination</div>
              <div>
                <button>show all</button>
                <button>Compare(0)</button>
              </div>
            </div>
            <hr />
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------- main card contents here --------------------- */}

        <div>
          {gridView ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {dummyProducts.map((product, index) => (
                <GridviewCard key={index} product={product}></GridviewCard>
              ))}
            </div>
          ) : (
            dummyProducts.map((product, index) => (
              <div key={index}>
                <ListViewCard product={product}></ListViewCard>
              </div>
            ))
          )}
        </div>

        <div>{}</div>

        <Outlet />
      </div>
    </div>
  );
}

export default MedicineCategoryLayout;
