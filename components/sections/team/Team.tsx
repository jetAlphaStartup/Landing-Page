"use client";
import React from "react";
import Container from "@/components/Container";
import TeamDescription from "./TeamDescription";
import Slider from "@/components/Slider";
import Image from "next/image";
import { teamMembers } from "@/lib/data";

type Props = {};

const Team = (props: Props) => {
  return (
    <div className="relative overflow-x-hidden">
      <Container type="external" className="z-100">
        <TeamDescription />
      </Container>
      <div className="space-y-4 absolute top-1/2 -translate-y-1/2 left-0 -z-100">
        <Slider
          inverse
          gap={1}
          duration={40}
          elements={teamMembers.map((member) => (
            <div key={member}>
              <Image
                src={member}
                alt={member}
                width={0}
                height={0}
                sizes="100vw"
                className="w-24 h-24 object-cover rounded-4xl"
                priority
              />
            </div>
          ))}
        />
        <Slider
          duration={40}
          gap={1}
          elements={teamMembers.map((member) => (
            <div key={member}>
              <Image
                src={member}
                alt={member}
                width={0}
                height={0}
                sizes="100vw"
                className="w-24 h-24 object-cover rounded-4xl"
                priority
              />
            </div>
          ))}
        />{" "}
      </div>
    </div>
  );
};

export default Team;
