import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiOutlineQuestion } from "react-icons/ai";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper styles={`bg-darkGray text-white `}>
      {/* Upper part */}
      <div className="grid grid-cols-4 text-xl">
        {" "}
        {/* first Column */}
        <div className="flex flex-col gap-6">
          <div>
            {" "}
            <div className="flex text-white text-7xl font-extrabold items-center">
              <p>A</p>
              <p>?</p>
            </div>
            <p className="text-xs font-semibold">Aalto University</p>
          </div>
          <div>
            {[1, 2, 3, 4].map((item, i) => {
              return <p key={i}>Aalto University</p>;
            })}
          </div>
          <div className="flex flex-col gap-4">
            <p>Follow us:</p>
            <div className="flex gap-2s">
              {" "}
              {[1, 2, 3, 4].map((item, i) => {
                return (
                  <p key={i}>
                    <AiFillFacebook />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div>
          <div className="grid gap-4">
            <p>Quicklinks</p>
            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
                return (
                  <Link href={""} key={i}>
                    <p className="underline">Aalto University</p>{" "}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4">
            <p>Latest</p>
            <div>
              {[1, 2, 3].map((item, i) => {
                return (
                  <Link href={""} key={i}>
                    <p className="underline">Aalto University</p>{" "}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* Third Column */}
        <div>
          <div className="flex flex-col gap-4">
            <p>Contact us</p>
            <div>
              {[1, 2].map((item, i) => {
                return (
                  <Link href={""} key={i}>
                    <p className="underline">Contact information</p>{" "}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Contact us</p>
            <div>
              {[1, 2, 4, 5, 6, 7].map((item, i) => {
                return (
                  <Link href={""} key={i}>
                    <p className="underline">Contact information</p>{" "}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* Fourth Column */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">Together towards a better world.</h1>
          <p>
            Support new ideas, research, work and leadership development towards
            a stronger Finland.
          </p>
          <button className="bg-white px-4 text-black rounded-full">
            Donate to our University
          </button>
        </div>
      </div>
      {/* lower part */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((item, i) => {
            return (
              <Link href={""} key={i}>
                <p className="underline">Aalto University</p>{" "}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4">
          {[1, 2, 3].map((item, i) => {
            return (
              <Link href={""} key={i}>
                <p className="underline">Aalto University</p>{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
